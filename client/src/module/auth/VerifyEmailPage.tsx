
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
,
 
u
s
e
R
e
f
,
 
u
s
e
E
f
f
e
c
t
,
 
u
s
e
C
a
l
l
b
a
c
k
 
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
 
L
i
n
k
,
 
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
,
 
u
s
e
S
e
a
r
c
h
P
a
r
a
m
s
 
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
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
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
 
u
s
e
A
u
t
h
S
t
o
r
e
 
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
l
i
b
/
a
u
t
h
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
{
 
N
a
v
b
a
r
 
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
N
a
v
b
a
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
 
S
E
O
 
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
S
E
O
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
 
V
e
r
i
f
y
E
m
a
i
l
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
s
e
a
r
c
h
P
a
r
a
m
s
]
 
=
 
u
s
e
S
e
a
r
c
h
P
a
r
a
m
s
(
)
;


 
 
c
o
n
s
t
 
e
m
a
i
l
 
=
 
s
e
a
r
c
h
P
a
r
a
m
s
.
g
e
t
(
"
e
m
a
i
l
"
)
 
|
|
 
"
"
;


 
 
c
o
n
s
t
 
l
o
g
i
n
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
(
s
)
 
=
>
 
s
.
l
o
g
i
n
)
;




 
 
c
o
n
s
t
 
[
o
t
p
,
 
s
e
t
O
t
p
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
"
"
,
 
"
"
,
 
"
"
,
 
"
"
,
 
"
"
,
 
"
"
]
)
;


 
 
c
o
n
s
t
 
[
e
r
r
o
r
,
 
s
e
t
E
r
r
o
r
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
 
[
r
e
s
e
n
d
C
o
o
l
d
o
w
n
,
 
s
e
t
R
e
s
e
n
d
C
o
o
l
d
o
w
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
6
0
)
;


 
 
c
o
n
s
t
 
i
n
p
u
t
R
e
f
s
 
=
 
u
s
e
R
e
f
<
(
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
 
|
 
n
u
l
l
)
[
]
>
(
[
]
)
;




 
 
/
/
 
C
o
u
n
t
d
o
w
n
 
t
i
m
e
r
 
f
o
r
 
r
e
s
e
n
d


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
r
e
s
e
n
d
C
o
o
l
d
o
w
n
 
<
=
 
0
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
t
i
m
e
r
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
R
e
s
e
n
d
C
o
o
l
d
o
w
n
(
(
p
r
e
v
)
 
=
>
 
p
r
e
v
 
-
 
1
)
;


 
 
 
 
}
,
 
1
0
0
0
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
t
i
m
e
r
)
;


 
 
}
,
 
[
r
e
s
e
n
d
C
o
o
l
d
o
w
n
]
)
;




 
 
/
/
 
A
u
t
o
-
f
o
c
u
s
 
f
i
r
s
t
 
i
n
p
u
t
 
o
n
 
m
o
u
n
t


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
n
p
u
t
R
e
f
s
.
c
u
r
r
e
n
t
[
0
]
?
.
f
o
c
u
s
(
)
;


 
 
}
,
 
[
]
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
V
e
r
i
f
y
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(


 
 
 
 
a
s
y
n
c
 
(
c
o
d
e
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


 
 
 
 
 
 
i
f
 
(
c
o
d
e
.
l
e
n
g
t
h
 
!
=
=
 
6
 
|
|
 
l
o
a
d
i
n
g
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
"
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
 
{
 
d
a
t
a
 
}
 
=
 
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
a
u
t
h
/
v
e
r
i
f
y
-
e
m
a
i
l
"
,
 
{
 
e
m
a
i
l
,
 
o
t
p
:
 
c
o
d
e
 
}
)
;


 
 
 
 
 
 
 
 
l
o
g
i
n
(
d
a
t
a
.
u
s
e
r
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
m
a
i
l
 
v
e
r
i
f
i
e
d
 
s
u
c
c
e
s
s
f
u
l
l
y
!
"
)
;


 
 
 
 
 
 
 
 
i
f
 
(
d
a
t
a
.
u
s
e
r
.
r
o
l
e
 
=
=
=
 
"
R
E
C
R
U
I
T
E
R
"
)
 
{


 
 
 
 
 
 
 
 
 
 
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
r
e
c
r
u
i
t
e
r
s
"
)
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
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
s
t
u
d
e
n
t
/
a
p
p
l
i
c
a
t
i
o
n
s
"
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
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
 
e
r
r
o
r
 
=
 
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
;


 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
e
r
r
o
r
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
V
e
r
i
f
i
c
a
t
i
o
n
 
f
a
i
l
e
d
"
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
,


 
 
 
 
[
e
m
a
i
l
,
 
l
o
a
d
i
n
g
,
 
l
o
g
i
n
,
 
n
a
v
i
g
a
t
e
]


 
 
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
C
h
a
n
g
e
 
=
 
(
i
n
d
e
x
:
 
n
u
m
b
e
r
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
)
 
=
>
 
{


 
 
 
 
/
/
 
O
n
l
y
 
a
l
l
o
w
 
d
i
g
i
t
s


 
 
 
 
c
o
n
s
t
 
d
i
g
i
t
 
=
 
v
a
l
u
e
.
r
e
p
l
a
c
e
(
/
\
D
/
g
,
 
"
"
)
.
s
l
i
c
e
(
-
1
)
;


 
 
 
 
c
o
n
s
t
 
n
e
w
O
t
p
 
=
 
[
.
.
.
o
t
p
]
;


 
 
 
 
n
e
w
O
t
p
[
i
n
d
e
x
]
 
=
 
d
i
g
i
t
;


 
 
 
 
s
e
t
O
t
p
(
n
e
w
O
t
p
)
;




 
 
 
 
/
/
 
A
u
t
o
-
f
o
c
u
s
 
n
e
x
t
 
b
o
x


 
 
 
 
i
f
 
(
d
i
g
i
t
 
&
&
 
i
n
d
e
x
 
<
 
5
)
 
{


 
 
 
 
 
 
i
n
p
u
t
R
e
f
s
.
c
u
r
r
e
n
t
[
i
n
d
e
x
 
+
 
1
]
?
.
f
o
c
u
s
(
)
;


 
 
 
 
}




 
 
 
 
/
/
 
A
u
t
o
-
s
u
b
m
i
t
 
w
h
e
n
 
a
l
l
 
6
 
d
i
g
i
t
s
 
f
i
l
l
e
d


 
 
 
 
c
o
n
s
t
 
c
o
d
e
 
=
 
n
e
w
O
t
p
.
j
o
i
n
(
"
"
)
;


 
 
 
 
i
f
 
(
c
o
d
e
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
 
6
 
&
&
 
n
e
w
O
t
p
.
e
v
e
r
y
(
(
d
)
 
=
>
 
d
 
!
=
=
 
"
"
)
)
 
{


 
 
 
 
 
 
h
a
n
d
l
e
V
e
r
i
f
y
(
c
o
d
e
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
 
h
a
n
d
l
e
K
e
y
D
o
w
n
 
=
 
(
i
n
d
e
x
:
 
n
u
m
b
e
r
,
 
e
:
 
R
e
a
c
t
.
K
e
y
b
o
a
r
d
E
v
e
n
t
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
>
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
B
a
c
k
s
p
a
c
e
"
 
&
&
 
!
o
t
p
[
i
n
d
e
x
]
 
&
&
 
i
n
d
e
x
 
>
 
0
)
 
{


 
 
 
 
 
 
i
n
p
u
t
R
e
f
s
.
c
u
r
r
e
n
t
[
i
n
d
e
x
 
-
 
1
]
?
.
f
o
c
u
s
(
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
 
h
a
n
d
l
e
P
a
s
t
e
 
=
 
(
e
:
 
R
e
a
c
t
.
C
l
i
p
b
o
a
r
d
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


 
 
 
 
c
o
n
s
t
 
p
a
s
t
e
d
 
=
 
e
.
c
l
i
p
b
o
a
r
d
D
a
t
a
.
g
e
t
D
a
t
a
(
"
t
e
x
t
"
)
.
r
e
p
l
a
c
e
(
/
\
D
/
g
,
 
"
"
)
.
s
l
i
c
e
(
0
,
 
6
)
;


 
 
 
 
i
f
 
(
!
p
a
s
t
e
d
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
n
e
w
O
t
p
 
=
 
[
.
.
.
o
t
p
]
;


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
6
;
 
i
+
+
)
 
{


 
 
 
 
 
 
n
e
w
O
t
p
[
i
]
 
=
 
p
a
s
t
e
d
[
i
]
 
|
|
 
"
"
;


 
 
 
 
}


 
 
 
 
s
e
t
O
t
p
(
n
e
w
O
t
p
)
;




 
 
 
 
/
/
 
F
o
c
u
s
 
l
a
s
t
 
f
i
l
l
e
d
 
i
n
p
u
t
 
o
r
 
t
h
e
 
n
e
x
t
 
e
m
p
t
y
 
o
n
e


 
 
 
 
c
o
n
s
t
 
f
o
c
u
s
I
n
d
e
x
 
=
 
M
a
t
h
.
m
i
n
(
p
a
s
t
e
d
.
l
e
n
g
t
h
,
 
5
)
;


 
 
 
 
i
n
p
u
t
R
e
f
s
.
c
u
r
r
e
n
t
[
f
o
c
u
s
I
n
d
e
x
]
?
.
f
o
c
u
s
(
)
;




 
 
 
 
/
/
 
A
u
t
o
-
s
u
b
m
i
t
 
i
f
 
a
l
l
 
6
 
d
i
g
i
t
s
 
p
a
s
t
e
d


 
 
 
 
i
f
 
(
p
a
s
t
e
d
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
 
6
)
 
{


 
 
 
 
 
 
h
a
n
d
l
e
V
e
r
i
f
y
(
p
a
s
t
e
d
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
 
h
a
n
d
l
e
R
e
s
e
n
d
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
r
e
s
e
n
d
C
o
o
l
d
o
w
n
 
>
 
0
)
 
r
e
t
u
r
n
;


 
 
 
 
s
e
t
E
r
r
o
r
(
"
"
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
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
a
u
t
h
/
r
e
s
e
n
d
-
o
t
p
"
,
 
{
 
e
m
a
i
l
 
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
V
e
r
i
f
i
c
a
t
i
o
n
 
c
o
d
e
 
r
e
s
e
n
t
!
"
)
;


 
 
 
 
 
 
s
e
t
R
e
s
e
n
d
C
o
o
l
d
o
w
n
(
6
0
)
;


 
 
 
 
 
 
s
e
t
O
t
p
(
[
"
"
,
 
"
"
,
 
"
"
,
 
"
"
,
 
"
"
,
 
"
"
]
)
;


 
 
 
 
 
 
i
n
p
u
t
R
e
f
s
.
c
u
r
r
e
n
t
[
0
]
?
.
f
o
c
u
s
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
 
e
r
r
o
r
 
=
 
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
;


 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
e
r
r
o
r
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
 
r
e
s
e
n
d
 
c
o
d
e
"
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
i
n
-
h
-
s
c
r
e
e
n
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
b
g
-
g
r
a
y
-
5
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
9
5
0
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
V
e
r
i
f
y
 
E
m
a
i
l
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
=
"
V
e
r
i
f
y
 
y
o
u
r
 
e
m
a
i
l
 
a
d
d
r
e
s
s
 
t
o
 
a
c
t
i
v
a
t
e
 
y
o
u
r
 
I
n
t
e
r
n
H
a
c
k
 
a
c
c
o
u
n
t
.
"


 
 
 
 
 
 
 
 
n
o
I
n
d
e
x


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
N
a
v
b
a
r
 
/
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
-
1
 
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
 
p
x
-
4
 
p
t
-
2
4
 
p
b
-
1
2
"
>


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
2
0
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
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
 
m
a
x
-
w
-
m
d
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
t
e
x
t
-
c
e
n
t
e
r
 
m
b
-
8
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
 
m
t
-
6
 
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
V
e
r
i
f
y
 
Y
o
u
r
 
E
m
a
i
l
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
e
'
v
e
 
s
e
n
t
 
a
 
6
-
d
i
g
i
t
 
c
o
d
e
 
t
o


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
{
e
m
a
i
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
t
-
1
"
>
{
e
m
a
i
l
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
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
8
 
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
 
s
h
a
d
o
w
-
s
m
 
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
e
r
r
o
r
 
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
p
-
3
 
b
g
-
r
e
d
-
5
0
 
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
r
e
d
-
2
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
 
t
e
x
t
-
r
e
d
-
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
O
T
P
 
I
n
p
u
t
 
B
o
x
e
s
 
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
f
l
e
x
 
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
 
g
a
p
-
3
"
 
o
n
P
a
s
t
e
=
{
h
a
n
d
l
e
P
a
s
t
e
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
t
p
.
m
a
p
(
(
d
i
g
i
t
,
 
i
n
d
e
x
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
n
d
e
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
(
e
l
)
 
=
>
 
{
 
i
n
p
u
t
R
e
f
s
.
c
u
r
r
e
n
t
[
i
n
d
e
x
]
 
=
 
e
l
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
p
u
t
M
o
d
e
=
"
n
u
m
e
r
i
c
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
x
L
e
n
g
t
h
=
{
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
d
i
g
i
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
 
h
a
n
d
l
e
C
h
a
n
g
e
(
i
n
d
e
x
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
 
h
a
n
d
l
e
K
e
y
D
o
w
n
(
i
n
d
e
x
,
 
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
1
0
 
h
-
1
2
 
s
m
:
w
-
1
2
 
s
m
:
h
-
1
4
 
t
e
x
t
-
c
e
n
t
e
r
 
t
e
x
t
-
l
g
 
s
m
:
t
e
x
t
-
x
l
 
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
2
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
 
f
o
c
u
s
:
b
o
r
d
e
r
-
b
l
a
c
k
 
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
b
o
r
d
e
r
-
w
h
i
t
e
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
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
8
0
0
 
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
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
L
o
a
d
i
n
g
 
s
t
a
t
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
c
e
n
t
e
r
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
V
e
r
i
f
y
i
n
g
.
.
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
R
e
s
e
n
d
 
C
o
d
e
 
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
t
e
x
t
-
c
e
n
t
e
r
"
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
D
i
d
n
'
t
 
r
e
c
e
i
v
e
 
t
h
e
 
c
o
d
e
?
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
e
s
e
n
d
C
o
o
l
d
o
w
n
 
>
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
g
r
a
y
-
4
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
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
s
e
n
d
 
i
n
 
{
r
e
s
e
n
d
C
o
o
l
d
o
w
n
}
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
h
a
n
d
l
e
R
e
s
e
n
d
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
t
e
x
t
-
b
l
a
c
k
 
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
 
h
o
v
e
r
:
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
s
e
n
d
 
C
o
d
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
c
e
n
t
e
r
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
r
o
n
g
 
e
m
a
i
l
?
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
r
e
g
i
s
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
t
e
x
t
-
b
l
a
c
k
 
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
 
h
o
v
e
r
:
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
G
o
 
b
a
c
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
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
/
m
o
t
i
o
n
.
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


 
 
)
;


}


