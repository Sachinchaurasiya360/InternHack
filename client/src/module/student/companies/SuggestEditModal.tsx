
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
 
X
,
 
L
o
a
d
e
r
2
,
 
S
e
n
d
 
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


i
m
p
o
r
t
 
t
y
p
e
 
{
 
C
o
m
p
a
n
y
 
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
l
i
b
/
t
y
p
e
s
"
;




i
n
t
e
r
f
a
c
e
 
S
u
g
g
e
s
t
E
d
i
t
M
o
d
a
l
P
r
o
p
s
 
{


 
 
s
l
u
g
:
 
s
t
r
i
n
g
;


 
 
c
o
m
p
a
n
y
:
 
C
o
m
p
a
n
y
;


 
 
o
n
C
l
o
s
e
:
 
(
)
 
=
>
 
v
o
i
d
;


}




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
 
S
u
g
g
e
s
t
E
d
i
t
M
o
d
a
l
(
{
 
s
l
u
g
,
 
c
o
m
p
a
n
y
,
 
o
n
C
l
o
s
e
 
}
:
 
S
u
g
g
e
s
t
E
d
i
t
M
o
d
a
l
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
[
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
,
 
s
e
t
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
c
o
m
p
a
n
y
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
)
;


 
 
c
o
n
s
t
 
[
m
i
s
s
i
o
n
,
 
s
e
t
M
i
s
s
i
o
n
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
c
o
m
p
a
n
y
.
m
i
s
s
i
o
n
 
|
|
 
"
"
)
;


 
 
c
o
n
s
t
 
[
w
e
b
s
i
t
e
,
 
s
e
t
W
e
b
s
i
t
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
(
c
o
m
p
a
n
y
.
w
e
b
s
i
t
e
 
|
|
 
"
"
)
;


 
 
c
o
n
s
t
 
[
a
d
d
r
e
s
s
,
 
s
e
t
A
d
d
r
e
s
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
(
c
o
m
p
a
n
y
.
a
d
d
r
e
s
s
 
|
|
 
"
"
)
;


 
 
c
o
n
s
t
 
[
r
e
a
s
o
n
,
 
s
e
t
R
e
a
s
o
n
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


 
 
 
 
i
f
 
(
!
r
e
a
s
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
 
{


 
 
 
 
 
 
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
"
P
l
e
a
s
e
 
p
r
o
v
i
d
e
 
a
 
r
e
a
s
o
n
 
f
o
r
 
t
h
e
 
e
d
i
t
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}




 
 
 
 
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


 
 
 
 
 
 
c
o
n
s
t
 
c
h
a
n
g
e
s
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
 
s
t
r
i
n
g
>
 
=
 
{
}
;


 
 
 
 
 
 
i
f
 
(
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
 
!
=
=
 
c
o
m
p
a
n
y
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
)
 
c
h
a
n
g
e
s
[
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
]
 
=
 
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
;


 
 
 
 
 
 
i
f
 
(
m
i
s
s
i
o
n
 
!
=
=
 
(
c
o
m
p
a
n
y
.
m
i
s
s
i
o
n
 
|
|
 
"
"
)
)
 
c
h
a
n
g
e
s
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
 
m
i
s
s
i
o
n
;


 
 
 
 
 
 
i
f
 
(
w
e
b
s
i
t
e
 
!
=
=
 
(
c
o
m
p
a
n
y
.
w
e
b
s
i
t
e
 
|
|
 
"
"
)
)
 
c
h
a
n
g
e
s
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
 
w
e
b
s
i
t
e
;


 
 
 
 
 
 
i
f
 
(
a
d
d
r
e
s
s
 
!
=
=
 
(
c
o
m
p
a
n
y
.
a
d
d
r
e
s
s
 
|
|
 
"
"
)
)
 
c
h
a
n
g
e
s
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
 
a
d
d
r
e
s
s
;




 
 
 
 
 
 
i
f
 
(
O
b
j
e
c
t
.
k
e
y
s
(
c
h
a
n
g
e
s
)
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
{


 
 
 
 
 
 
 
 
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
"
N
o
 
c
h
a
n
g
e
s
 
d
e
t
e
c
t
e
d
"
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
f
a
l
s
e
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}




 
 
 
 
 
 
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
`
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
$
{
s
l
u
g
}
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
/
e
d
i
t
`
,
 
{
 
c
h
a
n
g
e
s
,
 
r
e
a
s
o
n
:
 
r
e
a
s
o
n
.
t
r
i
m
(
)
 
}
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
E
d
i
t
 
s
u
g
g
e
s
t
i
o
n
 
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


 
 
 
 
 
 
o
n
C
l
o
s
e
(
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
 
e
d
i
t
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
f
i
x
e
d
 
i
n
s
e
t
-
0
 
b
g
-
b
l
a
c
k
/
5
0
 
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
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
z
-
5
0
 
p
-
4
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
 
r
o
u
n
d
e
d
-
2
x
l
 
w
-
f
u
l
l
 
m
a
x
-
w
-
l
g
 
m
a
x
-
h
-
[
9
0
v
h
]
 
o
v
e
r
f
l
o
w
-
y
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
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
p
-
5
 
b
o
r
d
e
r
-
b
 
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
l
g
 
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
S
u
g
g
e
s
t
 
E
d
i
t
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
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
 
o
n
C
l
i
c
k
=
{
o
n
C
l
o
s
e
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
5
 
h
-
5
 
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
p
-
5
 
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
 
s
e
t
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
3
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
 
s
e
t
M
i
s
s
i
o
n
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
 
s
e
t
W
e
b
s
i
t
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
 
s
e
t
A
d
d
r
e
s
s
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
R
e
a
s
o
n
 
f
o
r
 
e
d
i
t
 
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
r
e
a
s
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
 
s
e
t
R
e
a
s
o
n
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
y
 
s
h
o
u
l
d
 
t
h
i
s
 
b
e
 
c
h
a
n
g
e
d
?
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
2
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
r
e
a
s
o
n
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
S
e
n
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
 
S
u
g
g
e
s
t
i
o
n
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


