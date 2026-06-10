
i
m
p
o
r
t
 
{
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
u
s
e
N
a
v
i
g
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
B
u
i
l
d
i
n
g
2
,
 
L
o
a
d
e
r
2
,
 
P
l
u
s
,
 
X
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
t
o
a
s
t
 
f
r
o
m
 
"
@
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
t
o
a
s
t
"
;


i
m
p
o
r
t
 
{
 
u
p
l
o
a
d
D
i
r
e
c
t
T
o
S
3
 
}
 
f
r
o
m
 
"
@
/
u
t
i
l
s
/
u
p
l
o
a
d
"
;


i
m
p
o
r
t
 
a
p
i
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
x
i
o
s
"
;


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
b
u
t
t
o
n
"
;




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
A
d
d
C
o
m
p
a
n
y
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;


 
 
c
o
n
s
t
 
[
l
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
i
n
g
]
 
=
 
u
s
e
S
t
a
t
e
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
l
o
g
o
F
i
l
e
,
 
s
e
t
L
o
g
o
F
i
l
e
]
 
=
 
u
s
e
S
t
a
t
e
<
F
i
l
e
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;




 
 
c
o
n
s
t
 
[
f
o
r
m
,
 
s
e
t
F
o
r
m
]
 
=
 
u
s
e
S
t
a
t
e
(
{


 
 
 
 
n
a
m
e
:
 
"
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
"
,


 
 
 
 
m
i
s
s
i
o
n
:
 
"
"
,


 
 
 
 
i
n
d
u
s
t
r
y
:
 
"
"
,


 
 
 
 
s
i
z
e
:
 
"
S
T
A
R
T
U
P
"
 
a
s
 
s
t
r
i
n
g
,


 
 
 
 
c
i
t
y
:
 
"
"
,


 
 
 
 
s
t
a
t
e
:
 
"
"
,


 
 
 
 
a
d
d
r
e
s
s
:
 
"
"
,


 
 
 
 
w
e
b
s
i
t
e
:
 
"
"
,


 
 
 
 
h
i
r
i
n
g
S
t
a
t
u
s
:
 
f
a
l
s
e
,


 
 
 
 
f
o
u
n
d
e
d
Y
e
a
r
:
 
"
"
,


 
 
}
)
;




 
 
c
o
n
s
t
 
[
t
e
c
h
n
o
l
o
g
i
e
s
,
 
s
e
t
T
e
c
h
n
o
l
o
g
i
e
s
]
 
=
 
u
s
e
S
t
a
t
e
<
s
t
r
i
n
g
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
t
e
c
h
I
n
p
u
t
,
 
s
e
t
T
e
c
h
I
n
p
u
t
]
 
=
 
u
s
e
S
t
a
t
e
(
"
"
)
;




 
 
c
o
n
s
t
 
u
p
d
a
t
e
F
i
e
l
d
 
=
 
(
f
i
e
l
d
:
 
s
t
r
i
n
g
,
 
v
a
l
u
e
:
 
s
t
r
i
n
g
 
|
 
b
o
o
l
e
a
n
)
 
=
>
 
{


 
 
 
 
s
e
t
F
o
r
m
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
[
f
i
e
l
d
]
:
 
v
a
l
u
e
 
}
)
)
;


 
 
}
;




 
 
c
o
n
s
t
 
a
d
d
T
e
c
h
 
=
 
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
v
a
l
 
=
 
t
e
c
h
I
n
p
u
t
.
t
r
i
m
(
)
;


 
 
 
 
i
f
 
(
v
a
l
 
&
&
 
!
t
e
c
h
n
o
l
o
g
i
e
s
.
i
n
c
l
u
d
e
s
(
v
a
l
)
)
 
{


 
 
 
 
 
 
s
e
t
T
e
c
h
n
o
l
o
g
i
e
s
(
[
.
.
.
t
e
c
h
n
o
l
o
g
i
e
s
,
 
v
a
l
]
)
;


 
 
 
 
 
 
s
e
t
T
e
c
h
I
n
p
u
t
(
"
"
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
r
e
m
o
v
e
T
e
c
h
 
=
 
(
t
e
c
h
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
s
e
t
T
e
c
h
n
o
l
o
g
i
e
s
(
t
e
c
h
n
o
l
o
g
i
e
s
.
f
i
l
t
e
r
(
(
t
)
 
=
>
 
t
 
!
=
=
 
t
e
c
h
)
)
;


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
S
u
b
m
i
t
 
=
 
a
s
y
n
c
 
(
e
:
 
R
e
a
c
t
.
F
o
r
m
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
t
r
u
e
)
;




 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
l
e
t
 
l
o
g
o
U
r
l
:
 
s
t
r
i
n
g
 
|
 
u
n
d
e
f
i
n
e
d
;




 
 
 
 
 
 
i
f
 
(
l
o
g
o
F
i
l
e
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
u
p
l
o
a
d
R
e
s
 
=
 
a
w
a
i
t
 
u
p
l
o
a
d
D
i
r
e
c
t
T
o
S
3
(
{


 
 
 
 
 
 
 
 
 
 
f
i
l
e
:
 
l
o
g
o
F
i
l
e
,


 
 
 
 
 
 
 
 
 
 
f
o
l
d
e
r
:
 
"
c
o
m
p
a
n
y
-
l
o
g
o
s
"
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
l
o
g
o
U
r
l
 
=
 
u
p
l
o
a
d
R
e
s
.
f
i
l
e
U
r
l
;


 
 
 
 
 
 
}




 
 
 
 
 
 
c
o
n
s
t
 
b
o
d
y
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
u
n
k
n
o
w
n
>
 
=
 
{


 
 
 
 
 
 
 
 
n
a
m
e
:
 
f
o
r
m
.
n
a
m
e
.
t
r
i
m
(
)
,


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
f
o
r
m
.
d
e
s
c
r
i
p
t
i
o
n
.
t
r
i
m
(
)
,


 
 
 
 
 
 
 
 
i
n
d
u
s
t
r
y
:
 
f
o
r
m
.
i
n
d
u
s
t
r
y
.
t
r
i
m
(
)
,


 
 
 
 
 
 
 
 
s
i
z
e
:
 
f
o
r
m
.
s
i
z
e
,


 
 
 
 
 
 
 
 
c
i
t
y
:
 
f
o
r
m
.
c
i
t
y
.
t
r
i
m
(
)
,


 
 
 
 
 
 
}
;




 
 
 
 
 
 
i
f
 
(
f
o
r
m
.
m
i
s
s
i
o
n
.
t
r
i
m
(
)
)
 
b
o
d
y
[
"
m
i
s
s
i
o
n
"
]
 
=
 
f
o
r
m
.
m
i
s
s
i
o
n
.
t
r
i
m
(
)
;


 
 
 
 
 
 
i
f
 
(
f
o
r
m
.
s
t
a
t
e
.
t
r
i
m
(
)
)
 
b
o
d
y
[
"
s
t
a
t
e
"
]
 
=
 
f
o
r
m
.
s
t
a
t
e
.
t
r
i
m
(
)
;


 
 
 
 
 
 
i
f
 
(
f
o
r
m
.
a
d
d
r
e
s
s
.
t
r
i
m
(
)
)
 
b
o
d
y
[
"
a
d
d
r
e
s
s
"
]
 
=
 
f
o
r
m
.
a
d
d
r
e
s
s
.
t
r
i
m
(
)
;


 
 
 
 
 
 
i
f
 
(
f
o
r
m
.
w
e
b
s
i
t
e
.
t
r
i
m
(
)
)
 
b
o
d
y
[
"
w
e
b
s
i
t
e
"
]
 
=
 
f
o
r
m
.
w
e
b
s
i
t
e
.
t
r
i
m
(
)
;


 
 
 
 
 
 
i
f
 
(
f
o
r
m
.
f
o
u
n
d
e
d
Y
e
a
r
)
 
b
o
d
y
[
"
f
o
u
n
d
e
d
Y
e
a
r
"
]
 
=
 
p
a
r
s
e
I
n
t
(
f
o
r
m
.
f
o
u
n
d
e
d
Y
e
a
r
,
 
1
0
)
;


 
 
 
 
 
 
i
f
 
(
f
o
r
m
.
h
i
r
i
n
g
S
t
a
t
u
s
)
 
b
o
d
y
[
"
h
i
r
i
n
g
S
t
a
t
u
s
"
]
 
=
 
t
r
u
e
;


 
 
 
 
 
 
i
f
 
(
t
e
c
h
n
o
l
o
g
i
e
s
.
l
e
n
g
t
h
 
>
 
0
)
 
b
o
d
y
[
"
t
e
c
h
n
o
l
o
g
i
e
s
"
]
 
=
 
t
e
c
h
n
o
l
o
g
i
e
s
;


 
 
 
 
 
 
i
f
 
(
l
o
g
o
U
r
l
)
 
b
o
d
y
[
"
l
o
g
o
"
]
 
=
 
l
o
g
o
U
r
l
;




 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(
"
/
c
o
m
p
a
n
i
e
s
/
c
o
n
t
r
i
b
u
t
e
"
,
 
b
o
d
y
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
C
o
m
p
a
n
y
 
s
u
b
m
i
t
t
e
d
 
f
o
r
 
a
d
m
i
n
 
r
e
v
i
e
w
!
"
)
;


 
 
 
 
 
 
n
a
v
i
g
a
t
e
(
"
/
c
o
m
p
a
n
i
e
s
"
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
m
s
g
 
=
 
(
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
)
?
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
|
|
 
"
F
a
i
l
e
d
 
t
o
 
s
u
b
m
i
t
 
c
o
m
p
a
n
y
"
;


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
m
s
g
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
a
x
-
w
-
2
x
l
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
6
"
>


 
 
 
 
 
 
 
 
<
h
1
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
<
B
u
i
l
d
i
n
g
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
6
 
h
-
6
"
 
/
>
 
A
d
d
 
a
 
C
o
m
p
a
n
y


 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
5
0
0
 
m
t
-
1
"
>
S
u
b
m
i
t
 
a
 
c
o
m
p
a
n
y
 
f
o
r
 
r
e
v
i
e
w
.
 
I
t
 
w
i
l
l
 
b
e
 
v
i
s
i
b
l
e
 
o
n
c
e
 
a
p
p
r
o
v
e
d
 
b
y
 
a
n
 
a
d
m
i
n
.
<
/
p
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
f
o
r
m
 
o
n
S
u
b
m
i
t
=
{
h
a
n
d
l
e
S
u
b
m
i
t
}
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
6
"
>


 
 
 
 
 
 
 
 
{
/
*
 
B
a
s
i
c
 
I
n
f
o
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
p
-
6
 
r
o
u
n
d
e
d
-
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
s
h
a
d
o
w
-
s
m
 
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
b
a
s
e
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>
B
a
s
i
c
 
I
n
f
o
r
m
a
t
i
o
n
<
/
h
2
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>
C
o
m
p
a
n
y
 
N
a
m
e
 
*
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
t
e
x
t
"
 
v
a
l
u
e
=
{
f
o
r
m
.
n
a
m
e
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
F
i
e
l
d
(
"
n
a
m
e
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}
 
r
e
q
u
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
2
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
1
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>
D
e
s
c
r
i
p
t
i
o
n
 
*
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a
 
v
a
l
u
e
=
{
f
o
r
m
.
d
e
s
c
r
i
p
t
i
o
n
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
F
i
e
l
d
(
"
d
e
s
c
r
i
p
t
i
o
n
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}
 
r
e
q
u
i
r
e
d
 
r
o
w
s
=
{
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
W
h
a
t
 
d
o
e
s
 
t
h
i
s
 
c
o
m
p
a
n
y
 
d
o
?
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
2
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
1
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
r
e
s
i
z
e
-
n
o
n
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>
M
i
s
s
i
o
n
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a
 
v
a
l
u
e
=
{
f
o
r
m
.
m
i
s
s
i
o
n
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
F
i
e
l
d
(
"
m
i
s
s
i
o
n
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}
 
r
o
w
s
=
{
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
2
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
1
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
r
e
s
i
z
e
-
n
o
n
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>
I
n
d
u
s
t
r
y
 
*
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
t
e
x
t
"
 
v
a
l
u
e
=
{
f
o
r
m
.
i
n
d
u
s
t
r
y
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
F
i
e
l
d
(
"
i
n
d
u
s
t
r
y
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}
 
r
e
q
u
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
T
e
c
h
n
o
l
o
g
y
,
 
F
i
n
a
n
c
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
2
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
1
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>
C
o
m
p
a
n
y
 
S
i
z
e
 
*
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
e
l
e
c
t
 
v
a
l
u
e
=
{
f
o
r
m
.
s
i
z
e
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
F
i
e
l
d
(
"
s
i
z
e
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
2
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
1
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
S
T
A
R
T
U
P
"
>
S
t
a
r
t
u
p
 
(
1
-
1
0
)
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
S
M
A
L
L
"
>
S
m
a
l
l
 
(
1
1
-
5
0
)
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
M
E
D
I
U
M
"
>
M
e
d
i
u
m
 
(
5
1
-
2
0
0
)
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
L
A
R
G
E
"
>
L
a
r
g
e
 
(
2
0
1
-
1
0
0
0
)
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
o
p
t
i
o
n
 
v
a
l
u
e
=
"
E
N
T
E
R
P
R
I
S
E
"
>
E
n
t
e
r
p
r
i
s
e
 
(
1
0
0
0
+
)
<
/
o
p
t
i
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
e
l
e
c
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
L
o
c
a
t
i
o
n
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
p
-
6
 
r
o
u
n
d
e
d
-
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
s
h
a
d
o
w
-
s
m
 
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
b
a
s
e
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>
L
o
c
a
t
i
o
n
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>
C
i
t
y
 
*
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
t
e
x
t
"
 
v
a
l
u
e
=
{
f
o
r
m
.
c
i
t
y
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
F
i
e
l
d
(
"
c
i
t
y
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}
 
r
e
q
u
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
B
a
n
g
a
l
o
r
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
2
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
1
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>
S
t
a
t
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
t
e
x
t
"
 
v
a
l
u
e
=
{
f
o
r
m
.
s
t
a
t
e
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
F
i
e
l
d
(
"
s
t
a
t
e
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
K
a
r
n
a
t
a
k
a
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
2
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
1
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>
A
d
d
r
e
s
s
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
t
e
x
t
"
 
v
a
l
u
e
=
{
f
o
r
m
.
a
d
d
r
e
s
s
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
F
i
e
l
d
(
"
a
d
d
r
e
s
s
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
2
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
1
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
A
d
d
i
t
i
o
n
a
l
 
I
n
f
o
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
0
0
 
p
-
6
 
r
o
u
n
d
e
d
-
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
8
0
0
 
s
h
a
d
o
w
-
s
m
 
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
b
a
s
e
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
"
>
A
d
d
i
t
i
o
n
a
l
 
D
e
t
a
i
l
s
<
/
h
2
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>
W
e
b
s
i
t
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
u
r
l
"
 
v
a
l
u
e
=
{
f
o
r
m
.
w
e
b
s
i
t
e
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
F
i
e
l
d
(
"
w
e
b
s
i
t
e
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
h
t
t
p
s
:
/
/
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
2
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
1
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>
F
o
u
n
d
e
d
 
Y
e
a
r
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
f
o
r
m
.
f
o
u
n
d
e
d
Y
e
a
r
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
F
i
e
l
d
(
"
f
o
u
n
d
e
d
Y
e
a
r
"
,
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
2
0
1
5
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
x
-
4
 
p
y
-
2
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
1
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
T
e
c
h
n
o
l
o
g
i
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>
T
e
c
h
n
o
l
o
g
i
e
s
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
t
e
x
t
"
 
v
a
l
u
e
=
{
t
e
c
h
I
n
p
u
t
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
T
e
c
h
I
n
p
u
t
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
K
e
y
D
o
w
n
=
{
(
e
)
 
=
>
 
{
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
E
n
t
e
r
"
)
 
{
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;
 
a
d
d
T
e
c
h
(
)
;
 
}
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
T
y
p
e
 
a
n
d
 
p
r
e
s
s
 
E
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
p
x
-
4
 
p
y
-
2
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
l
g
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
1
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
w
h
i
t
e
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
g
r
a
y
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
t
y
p
e
=
"
b
u
t
t
o
n
"
 
v
a
r
i
a
n
t
=
"
s
e
c
o
n
d
a
r
y
"
 
m
o
d
e
=
"
i
c
o
n
"
 
o
n
C
l
i
c
k
=
{
a
d
d
T
e
c
h
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
u
s
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
c
h
n
o
l
o
g
i
e
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
2
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
c
h
n
o
l
o
g
i
e
s
.
m
a
p
(
(
t
e
c
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
k
e
y
=
{
t
e
c
h
}
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
1
 
p
x
-
3
 
p
y
-
1
 
b
g
-
b
l
u
e
-
5
0
 
t
e
x
t
-
b
l
u
e
-
7
0
0
 
d
a
r
k
:
b
g
-
b
l
u
e
-
9
0
0
/
3
0
 
d
a
r
k
:
t
e
x
t
-
b
l
u
e
-
4
0
0
 
t
e
x
t
-
s
m
 
r
o
u
n
d
e
d
-
f
u
l
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
c
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
t
y
p
e
=
"
b
u
t
t
o
n
"
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"
 
m
o
d
e
=
"
i
c
o
n
"
 
s
i
z
e
=
"
s
m
"
 
c
l
a
s
s
N
a
m
e
=
"
h
-
a
u
t
o
 
w
-
a
u
t
o
 
p
-
0
"
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
r
e
m
o
v
e
T
e
c
h
(
t
e
c
h
)
}
>
<
X
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
L
o
g
o
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
t
e
x
t
-
s
m
 
f
o
n
t
-
m
e
d
i
u
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>
C
o
m
p
a
n
y
 
L
o
g
o
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
f
i
l
e
"
 
a
c
c
e
p
t
=
"
i
m
a
g
e
/
*
"
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
L
o
g
o
F
i
l
e
(
e
.
t
a
r
g
e
t
.
f
i
l
e
s
?
.
[
0
]
 
|
|
 
n
u
l
l
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
4
0
0
 
f
i
l
e
:
m
r
-
4
 
f
i
l
e
:
p
y
-
2
 
f
i
l
e
:
p
x
-
4
 
f
i
l
e
:
r
o
u
n
d
e
d
-
l
g
 
f
i
l
e
:
b
o
r
d
e
r
-
0
 
f
i
l
e
:
t
e
x
t
-
s
m
 
f
i
l
e
:
f
o
n
t
-
m
e
d
i
u
m
 
f
i
l
e
:
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
f
i
l
e
:
b
g
-
g
r
a
y
-
8
0
0
 
f
i
l
e
:
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
f
i
l
e
:
t
e
x
t
-
g
r
a
y
-
3
0
0
 
h
o
v
e
r
:
f
i
l
e
:
b
g
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
h
o
v
e
r
:
f
i
l
e
:
b
g
-
g
r
a
y
-
7
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
H
i
r
i
n
g
 
S
t
a
t
u
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
c
h
e
c
k
b
o
x
"
 
c
h
e
c
k
e
d
=
{
f
o
r
m
.
h
i
r
i
n
g
S
t
a
t
u
s
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
u
p
d
a
t
e
F
i
e
l
d
(
"
h
i
r
i
n
g
S
t
a
t
u
s
"
,
 
e
.
t
a
r
g
e
t
.
c
h
e
c
k
e
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
 
b
o
r
d
e
r
-
g
r
a
y
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
6
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
g
r
a
y
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
3
0
0
"
>
C
u
r
r
e
n
t
l
y
 
h
i
r
i
n
g
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
t
y
p
e
=
"
s
u
b
m
i
t
"
 
v
a
r
i
a
n
t
=
"
m
o
n
o
"
 
s
i
z
e
=
"
l
g
"
 
d
i
s
a
b
l
e
d
=
{
l
o
a
d
i
n
g
 
|
|
 
!
f
o
r
m
.
n
a
m
e
.
t
r
i
m
(
)
 
|
|
 
!
f
o
r
m
.
d
e
s
c
r
i
p
t
i
o
n
.
t
r
i
m
(
)
 
|
|
 
!
f
o
r
m
.
i
n
d
u
s
t
r
y
.
t
r
i
m
(
)
 
|
|
 
!
f
o
r
m
.
c
i
t
y
.
t
r
i
m
(
)
}


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
r
o
u
n
d
e
d
-
x
l
"
>


 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
?
 
<
>
<
L
o
a
d
e
r
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>
 
S
u
b
m
i
t
t
i
n
g
.
.
.
<
/
>
 
:
 
<
>
<
B
u
i
l
d
i
n
g
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
 
S
u
b
m
i
t
 
C
o
m
p
a
n
y
<
/
>
}


 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
<
/
f
o
r
m
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


