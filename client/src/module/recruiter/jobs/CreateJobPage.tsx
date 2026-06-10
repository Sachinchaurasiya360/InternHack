
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
M
e
m
o
,
 
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
,
 
L
i
n
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
 
{
 
A
r
r
o
w
L
e
f
t
,
 
A
r
r
o
w
R
i
g
h
t
,
 
C
h
e
c
k
,
 
A
l
e
r
t
C
i
r
c
l
e
,
 
B
r
i
e
f
c
a
s
e
,
 
F
i
l
e
S
p
r
e
a
d
s
h
e
e
t
,
 
L
a
y
e
r
s
,
 
E
y
e
 
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
 
D
y
n
a
m
i
c
F
i
e
l
d
B
u
i
l
d
e
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
D
y
n
a
m
i
c
F
i
e
l
d
B
u
i
l
d
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
 
R
o
u
n
d
s
M
a
n
a
g
e
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
r
o
u
n
d
s
/
R
o
u
n
d
s
M
a
n
a
g
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
 
t
y
p
e
 
{
 
C
u
s
t
o
m
F
i
e
l
d
D
e
f
i
n
i
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
o
a
s
t
 
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
 
K
i
c
k
e
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
K
i
c
k
e
r
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
 
R
o
u
n
d
I
n
p
u
t
 
{


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
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
 
s
t
r
i
n
g
;


 
 
i
n
s
t
r
u
c
t
i
o
n
s
:
 
s
t
r
i
n
g
;


 
 
a
c
t
i
v
a
t
e
A
t
:
 
s
t
r
i
n
g
;


 
 
c
u
s
t
o
m
F
i
e
l
d
s
:
 
C
u
s
t
o
m
F
i
e
l
d
D
e
f
i
n
i
t
i
o
n
[
]
;


 
 
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
:
 
{
 
i
d
:
 
s
t
r
i
n
g
;
 
c
r
i
t
e
r
i
o
n
:
 
s
t
r
i
n
g
;
 
m
a
x
S
c
o
r
e
:
 
n
u
m
b
e
r
 
}
[
]
;


}




t
y
p
e
 
S
t
e
p
K
e
y
 
=
 
"
b
a
s
i
c
s
"
 
|
 
"
f
i
e
l
d
s
"
 
|
 
"
r
o
u
n
d
s
"
 
|
 
"
r
e
v
i
e
w
"
;




c
o
n
s
t
 
S
T
E
P
S
:
 
{
 
k
e
y
:
 
S
t
e
p
K
e
y
;
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
i
c
o
n
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
T
y
p
e
<
{
 
c
l
a
s
s
N
a
m
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
>
;
 
c
a
p
t
i
o
n
:
 
s
t
r
i
n
g
 
}
[
]
 
=
 
[


 
 
{
 
k
e
y
:
 
"
b
a
s
i
c
s
"
,
 
l
a
b
e
l
:
 
"
B
a
s
i
c
s
"
,
 
i
c
o
n
:
 
B
r
i
e
f
c
a
s
e
,
 
c
a
p
t
i
o
n
:
 
"
T
i
t
l
e
,
 
l
o
c
a
t
i
o
n
,
 
d
e
a
d
l
i
n
e
"
 
}
,


 
 
{
 
k
e
y
:
 
"
f
i
e
l
d
s
"
,
 
l
a
b
e
l
:
 
"
F
i
e
l
d
s
"
,
 
i
c
o
n
:
 
F
i
l
e
S
p
r
e
a
d
s
h
e
e
t
,
 
c
a
p
t
i
o
n
:
 
"
E
x
t
r
a
 
i
n
f
o
 
y
o
u
 
n
e
e
d
 
f
r
o
m
 
c
a
n
d
i
d
a
t
e
s
"
 
}
,


 
 
{
 
k
e
y
:
 
"
r
o
u
n
d
s
"
,
 
l
a
b
e
l
:
 
"
R
o
u
n
d
s
"
,
 
i
c
o
n
:
 
L
a
y
e
r
s
,
 
c
a
p
t
i
o
n
:
 
"
S
t
a
g
e
s
 
o
f
 
y
o
u
r
 
h
i
r
i
n
g
 
p
r
o
c
e
s
s
"
 
}
,


 
 
{
 
k
e
y
:
 
"
r
e
v
i
e
w
"
,
 
l
a
b
e
l
:
 
"
R
e
v
i
e
w
"
,
 
i
c
o
n
:
 
E
y
e
,
 
c
a
p
t
i
o
n
:
 
"
C
o
n
f
i
r
m
 
a
n
d
 
p
u
b
l
i
s
h
"
 
}
,


]
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
 
C
r
e
a
t
e
J
o
b
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
 
u
s
e
r
 
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
u
s
e
r
)
;


 
 
c
o
n
s
t
 
[
s
t
e
p
I
d
x
,
 
s
e
t
S
t
e
p
I
d
x
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
0
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


 
 
 
 
t
i
t
l
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


 
 
 
 
l
o
c
a
t
i
o
n
:
 
"
"
,


 
 
 
 
s
a
l
a
r
y
:
 
"
"
,


 
 
 
 
c
o
m
p
a
n
y
:
 
u
s
e
r
?
.
c
o
m
p
a
n
y
 
|
|
 
"
"
,


 
 
 
 
d
e
a
d
l
i
n
e
:
 
"
"
,


 
 
 
 
t
a
g
s
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
c
u
s
t
o
m
F
i
e
l
d
s
,
 
s
e
t
C
u
s
t
o
m
F
i
e
l
d
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
C
u
s
t
o
m
F
i
e
l
d
D
e
f
i
n
i
t
i
o
n
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
r
o
u
n
d
s
,
 
s
e
t
R
o
u
n
d
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
R
o
u
n
d
I
n
p
u
t
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
 
c
u
r
r
e
n
t
S
t
e
p
 
=
 
S
T
E
P
S
[
s
t
e
p
I
d
x
]
!
;




 
 
c
o
n
s
t
 
b
a
s
i
c
s
C
o
m
p
l
e
t
e
 
=
 
u
s
e
M
e
m
o
(


 
 
 
 
(
)
 
=
>
 
f
o
r
m
.
t
i
t
l
e
.
t
r
i
m
(
)
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
.
l
e
n
g
t
h
 
>
 
0
,


 
 
 
 
[
f
o
r
m
.
t
i
t
l
e
,
 
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
]
,


 
 
)
;


 
 
c
o
n
s
t
 
c
a
n
A
d
v
a
n
c
e
 
=
 
s
t
e
p
I
d
x
 
=
=
=
 
0
 
?
 
b
a
s
i
c
s
C
o
m
p
l
e
t
e
 
:
 
t
r
u
e
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
)
 
=
>
 
{


 
 
i
f
 
(
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




 
 
i
f
 
(
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
l
e
n
g
t
h
 
>
 
5
0
0
0
)
 
{


 
 
 
 
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
 
c
a
n
n
o
t
 
e
x
c
e
e
d
 
5
0
0
0
 
c
h
a
r
a
c
t
e
r
s
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
j
o
b
s
"
,
 
{


 
 
 
 
 
 
 
 
t
i
t
l
e
:
 
f
o
r
m
.
t
i
t
l
e
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
,


 
 
 
 
 
 
 
 
l
o
c
a
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
l
o
c
a
t
i
o
n
,


 
 
 
 
 
 
 
 
s
a
l
a
r
y
:
 
f
o
r
m
.
s
a
l
a
r
y
,


 
 
 
 
 
 
 
 
c
o
m
p
a
n
y
:
 
f
o
r
m
.
c
o
m
p
a
n
y
,


 
 
 
 
 
 
 
 
d
e
a
d
l
i
n
e
:
 
f
o
r
m
.
d
e
a
d
l
i
n
e
 
?
 
n
e
w
 
D
a
t
e
(
f
o
r
m
.
d
e
a
d
l
i
n
e
)
.
t
o
I
S
O
S
t
r
i
n
g
(
)
 
:
 
u
n
d
e
f
i
n
e
d
,


 
 
 
 
 
 
 
 
t
a
g
s
:
 
[
.
.
.
n
e
w
 
S
e
t
(
f
o
r
m
.
t
a
g
s
.
s
p
l
i
t
(
"
,
"
)
.
m
a
p
(
(
t
)
 
=
>
 
t
.
t
r
i
m
(
)
)
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
)
]
,


 
 
 
 
 
 
 
 
c
u
s
t
o
m
F
i
e
l
d
s
,


 
 
 
 
 
 
 
 
s
t
a
t
u
s
:
 
"
D
R
A
F
T
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
 
j
o
b
I
d
 
=
 
d
a
t
a
.
j
o
b
.
i
d
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
 
r
o
u
n
d
s
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
r
o
u
n
d
 
=
 
r
o
u
n
d
s
[
i
]
!
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
`
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
/
j
o
b
s
/
$
{
j
o
b
I
d
}
/
r
o
u
n
d
s
`
,
 
{


 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
r
o
u
n
d
.
n
a
m
e
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
 
r
o
u
n
d
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
,


 
 
 
 
 
 
 
 
 
 
o
r
d
e
r
I
n
d
e
x
:
 
i
,


 
 
 
 
 
 
 
 
 
 
i
n
s
t
r
u
c
t
i
o
n
s
:
 
r
o
u
n
d
.
i
n
s
t
r
u
c
t
i
o
n
s
,


 
 
 
 
 
 
 
 
 
 
c
u
s
t
o
m
F
i
e
l
d
s
:
 
r
o
u
n
d
.
c
u
s
t
o
m
F
i
e
l
d
s
,


 
 
 
 
 
 
 
 
 
 
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
:
 
r
o
u
n
d
.
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
,


 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
a
t
e
A
t
:
 
r
o
u
n
d
.
a
c
t
i
v
a
t
e
A
t
 
?
 
n
e
w
 
D
a
t
e
(
r
o
u
n
d
.
a
c
t
i
v
a
t
e
A
t
)
.
t
o
I
S
O
S
t
r
i
n
g
(
)
 
:
 
n
u
l
l
,


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
}




 
 
 
 
 
 
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
J
o
b
 
c
r
e
a
t
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
/
j
o
b
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
;
 
e
r
r
o
r
s
?
:
 
{
 
f
i
e
l
d
E
r
r
o
r
s
?
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
[
]
>
 
}
 
}
 
}
 
}
;


 
 
 
 
 
 
c
o
n
s
t
 
f
i
e
l
d
E
r
r
o
r
s
 
=
 
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
e
r
r
o
r
s
?
.
f
i
e
l
d
E
r
r
o
r
s
;


 
 
 
 
 
 
i
f
 
(
f
i
e
l
d
E
r
r
o
r
s
 
&
&
 
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
f
i
e
l
d
E
r
r
o
r
s
)
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
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
e
s
s
a
g
e
s
 
=
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
f
i
e
l
d
E
r
r
o
r
s
)


 
 
 
 
 
 
 
 
 
 
.
m
a
p
(
(
[
f
i
e
l
d
,
 
m
s
g
s
]
)
 
=
>
 
`
$
{
f
i
e
l
d
}
:
 
$
{
(
m
s
g
s
 
a
s
 
s
t
r
i
n
g
[
]
)
.
j
o
i
n
(
"
,
 
"
)
}
`
)


 
 
 
 
 
 
 
 
 
 
.
j
o
i
n
(
"
;
 
"
)
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
m
e
s
s
a
g
e
s
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
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
 
c
r
e
a
t
e
 
j
o
b
"
)
;


 
 
 
 
 
 
}


 
 
 
 
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
r
e
l
a
t
i
v
e
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
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
C
r
e
a
t
e
 
J
o
b
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
d
i
v


 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
o
p
a
c
i
t
y
-
[
0
.
0
4
]
 
d
a
r
k
:
o
p
a
c
i
t
y
-
[
0
.
0
5
]
 
z
-
0
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
I
m
a
g
e
:
 
"
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
t
o
 
r
i
g
h
t
,
 
r
g
b
a
(
1
2
0
,
1
1
3
,
1
0
8
,
0
.
2
5
)
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
1
p
x
)
"
,


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
S
i
z
e
:
 
"
1
2
0
p
x
 
1
0
0
%
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
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
r
e
l
a
t
i
v
e
 
m
a
x
-
w
-
4
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


 
 
 
 
 
 
 
 
{
/
*
 
E
d
i
t
o
r
i
a
l
 
h
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
 
 
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
 
1
6
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
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
m
t
-
6
 
m
b
-
8
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
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
c
r
u
i
t
e
r
s
/
j
o
b
s
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
i
n
l
i
n
e
-
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
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
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
t
e
x
t
-
s
t
o
n
e
-
5
0
 
n
o
-
u
n
d
e
r
l
i
n
e
 
m
b
-
4
 
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
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
L
e
f
t
 
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


 
 
 
 
 
 
 
 
 
 
 
 
m
y
 
j
o
b
s


 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
r
e
c
r
u
i
t
e
r
 
/
 
n
e
w
 
p
o
s
t
i
n
g
<
/
K
i
c
k
e
r
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
m
t
-
4
 
t
e
x
t
-
4
x
l
 
s
m
:
t
e
x
t
-
5
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
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
P
o
s
t
 
a
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
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
r
e
l
a
t
i
v
e
 
i
n
l
i
n
e
-
b
l
o
c
k
"
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
r
e
l
a
t
i
v
e
 
z
-
1
0
"
>
n
e
w
 
r
o
l
e
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
X
:
 
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
 
s
c
a
l
e
X
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
7
,
 
d
e
l
a
y
:
 
0
.
4
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
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
a
b
s
o
l
u
t
e
 
b
o
t
t
o
m
-
1
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
h
-
3
 
m
d
:
h
-
4
 
b
g
-
l
i
m
e
-
4
0
0
 
o
r
i
g
i
n
-
l
e
f
t
 
z
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
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
m
t
-
3
 
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
s
t
o
n
e
-
5
0
0
 
m
a
x
-
w
-
x
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
W
a
l
k
 
t
h
r
o
u
g
h
 
t
h
e
 
b
a
s
i
c
s
,
 
c
o
l
l
e
c
t
 
t
h
e
 
e
x
t
r
a
 
i
n
f
o
 
y
o
u
 
n
e
e
d
 
f
r
o
m
 
c
a
n
d
i
d
a
t
e
s
,
 
a
n
d
 
d
e
f
i
n
e
 
y
o
u
r
 
h
i
r
i
n
g
 
r
o
u
n
d
s
.
 
T
h
e
 
j
o
b
 
s
a
v
e
s
 
a
s
 
a
 
d
r
a
f
t
,
 
p
u
b
l
i
s
h
 
i
t
 
f
r
o
m
 
M
y
 
J
o
b
s
 
w
h
e
n
 
y
o
u
'
r
e
 
r
e
a
d
y
.


 
 
 
 
 
 
 
 
 
 
<
/
p
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




 
 
 
 
 
 
 
 
{
/
*
 
S
t
e
p
p
e
r
 
*
/
}


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
o
l


 
 
 
 
 
 
 
 
 
 
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
 
1
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
=
{
{
 
d
e
l
a
y
:
 
0
.
0
5
 
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
2
 
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
4
 
g
a
p
-
3
 
m
b
-
8
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
S
T
E
P
S
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
u
r
r
e
n
t
 
=
 
i
 
=
=
=
 
s
t
e
p
I
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
D
o
n
e
 
=
 
i
 
<
 
s
t
e
p
I
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
s
.
k
e
y
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
(
)
 
=
>
 
s
e
t
S
t
e
p
I
d
x
(
i
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
{
`
g
r
o
u
p
 
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
l
e
f
t
 
p
-
4
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
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
s
t
o
n
e
-
9
0
0
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
C
u
r
r
e
n
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
s
t
o
n
e
-
9
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
s
t
o
n
e
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
-
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
3
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
/
2
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
g
a
p
-
2
 
m
b
-
2
"
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
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
(
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
D
o
n
e
 
&
&
 
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
i
n
l
i
n
e
-
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
 
w
-
4
 
h
-
4
 
b
g
-
l
i
m
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
t
o
n
e
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
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
 
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
 
s
t
r
o
k
e
W
i
d
t
h
=
{
3
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
C
u
r
r
e
n
t
 
&
&
 
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
h
-
1
 
w
-
1
 
b
g
-
l
i
m
e
-
4
0
0
"
 
/
>
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
s
.
i
c
o
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
{
`
w
-
4
 
h
-
4
 
s
h
r
i
n
k
-
0
 
$
{
i
s
C
u
r
r
e
n
t
 
|
|
 
i
s
D
o
n
e
 
?
 
"
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
"
 
:
 
"
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
}
`
}
 
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
{
`
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
b
o
l
d
 
$
{
i
s
C
u
r
r
e
n
t
 
|
|
 
i
s
D
o
n
e
 
?
 
"
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
"
 
:
 
"
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
[
1
1
p
x
]
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
t
-
1
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
s
.
c
a
p
t
i
o
n
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
o
l
>




 
 
 
 
 
 
 
 
{
/
*
 
E
r
r
o
r
 
*
/
}


 
 
 
 
 
 
 
 
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
m
b
-
6
 
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
s
t
a
r
t
 
g
a
p
-
3
 
p
-
4
 
b
g
-
r
e
d
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
r
e
d
-
9
5
0
/
3
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
r
e
d
-
9
0
0
/
5
0
 
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
C
i
r
c
l
e
 
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
r
e
d
-
4
0
0
 
s
h
r
i
n
k
-
0
 
m
t
-
0
.
5
"
 
/
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
r
e
d
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
r
e
d
-
4
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
p
>


 
 
 
 
 
 
 
 
 
 
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
 
S
t
e
p
 
C
o
n
t
e
n
t
 
*
/
}


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
e
c
t
i
o
n


 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
u
r
r
e
n
t
S
t
e
p
.
k
e
y
}


 
 
 
 
 
 
 
 
 
 
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
 
8
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
2
5
 
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
s
t
o
n
e
-
9
0
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
e
c
t
i
o
n
 
h
e
a
d
e
r
 
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
p
x
-
6
 
p
y
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
s
t
e
p
 
{
s
t
e
p
I
d
x
 
+
 
1
}
 
/
 
{
S
T
E
P
S
.
l
e
n
g
t
h
}
<
/
K
i
c
k
e
r
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
m
t
-
2
 
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
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
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
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
I
d
x
 
=
=
=
 
0
 
&
&
 
"
T
h
e
 
b
a
s
i
c
s
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
I
d
x
 
=
=
=
 
1
 
&
&
 
"
C
u
s
t
o
m
 
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
 
f
i
e
l
d
s
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
I
d
x
 
=
=
=
 
2
 
&
&
 
"
H
i
r
i
n
g
 
r
o
u
n
d
s
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
I
d
x
 
=
=
=
 
3
 
&
&
 
"
R
e
v
i
e
w
 
a
n
d
 
c
r
e
a
t
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
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
s
t
o
n
e
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
{
c
u
r
r
e
n
t
S
t
e
p
.
c
a
p
t
i
o
n
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
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
S
t
e
p
.
k
e
y
 
=
=
=
 
"
b
a
s
i
c
s
"
 
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
s
p
a
c
e
-
y
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
J
o
b
 
t
i
t
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
q
u
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
t
m
l
F
o
r
=
"
t
i
t
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
n
t
=
"
W
h
a
t
 
c
a
n
d
i
d
a
t
e
s
 
w
i
l
l
 
s
e
e
 
f
i
r
s
t
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
t
i
t
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
i
t
l
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
F
o
r
m
(
{
 
.
.
.
f
o
r
m
,
 
t
i
t
l
e
:
 
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
 
}
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
 
F
r
o
n
t
e
n
d
 
D
e
v
e
l
o
p
e
r
 
I
n
t
e
r
n
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
{
i
n
p
u
t
C
l
a
s
s
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
q
u
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
t
m
l
F
o
r
=
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
n
t
=
"
R
e
s
p
o
n
s
i
b
i
l
i
t
i
e
s
,
 
r
e
q
u
i
r
e
m
e
n
t
s
,
 
t
h
e
 
k
i
n
d
 
o
f
 
p
e
r
s
o
n
 
y
o
u
'
r
e
 
l
o
o
k
i
n
g
 
f
o
r
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
i
d
=
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
5
0
0
0
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
F
o
r
m
(
{


 
 
 
 
 
 
.
.
.
f
o
r
m
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
.
s
l
i
c
e
(
0
,
 
5
0
0
0
)
,


 
 
 
 
}
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
D
e
s
c
r
i
b
e
 
t
h
e
 
r
o
l
e
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
{
`
$
{
i
n
p
u
t
C
l
a
s
s
(
)
}
 
m
i
n
-
h
-
4
0
 
r
e
s
i
z
e
-
y
`
}


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
m
t
-
2
 
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
e
n
d
"
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
x
s
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
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
.
l
e
n
g
t
h
}
 
/
 
5
0
0
0


 
 
<
/
s
p
a
n
>


<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
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
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d
 
l
a
b
e
l
=
"
L
o
c
a
t
i
o
n
"
 
h
t
m
l
F
o
r
=
"
l
o
c
a
t
i
o
n
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
l
o
c
a
t
i
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
l
o
c
a
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
F
o
r
m
(
{
 
.
.
.
f
o
r
m
,
 
l
o
c
a
t
i
o
n
:
 
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
 
}
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
R
e
m
o
t
e
,
 
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
{
i
n
p
u
t
C
l
a
s
s
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d
 
l
a
b
e
l
=
"
S
a
l
a
r
y
"
 
h
t
m
l
F
o
r
=
"
s
a
l
a
r
y
"
 
h
i
n
t
=
"
e
.
g
.
 
1
5
k
-
2
5
k
 
/
 
m
o
n
t
h
 
o
r
 
₹
1
0
 
L
P
A
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
s
a
l
a
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
l
a
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
 
s
e
t
F
o
r
m
(
{
 
.
.
.
f
o
r
m
,
 
s
a
l
a
r
y
:
 
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
 
}
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
1
5
k
-
2
5
k
 
/
 
m
o
n
t
h
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
{
i
n
p
u
t
C
l
a
s
s
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
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
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d
 
l
a
b
e
l
=
"
C
o
m
p
a
n
y
"
 
h
t
m
l
F
o
r
=
"
c
o
m
p
a
n
y
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
c
o
m
p
a
n
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
m
p
a
n
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
 
s
e
t
F
o
r
m
(
{
 
.
.
.
f
o
r
m
,
 
c
o
m
p
a
n
y
:
 
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
 
}
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
Y
o
u
r
 
c
o
m
p
a
n
y
 
n
a
m
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
{
i
n
p
u
t
C
l
a
s
s
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d
 
l
a
b
e
l
=
"
A
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
 
d
e
a
d
l
i
n
e
"
 
h
t
m
l
F
o
r
=
"
d
e
a
d
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
d
e
a
d
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
d
a
t
e
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
d
e
a
d
l
i
n
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
F
o
r
m
(
{
 
.
.
.
f
o
r
m
,
 
d
e
a
d
l
i
n
e
:
 
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
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
n
e
w
 
D
a
t
e
(
)
.
t
o
I
S
O
S
t
r
i
n
g
(
)
.
s
p
l
i
t
(
"
T
"
)
[
0
]
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
{
i
n
p
u
t
C
l
a
s
s
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
e
l
d
 
l
a
b
e
l
=
"
T
a
g
s
"
 
h
t
m
l
F
o
r
=
"
t
a
g
s
"
 
h
i
n
t
=
"
C
o
m
m
a
-
s
e
p
a
r
a
t
e
d
.
 
H
e
l
p
s
 
c
a
n
d
i
d
a
t
e
s
 
f
i
n
d
 
y
o
u
.
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
d
=
"
t
a
g
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
a
g
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
F
o
r
m
(
{
 
.
.
.
f
o
r
m
,
 
t
a
g
s
:
 
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
 
}
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
R
e
a
c
t
,
 
T
y
p
e
S
c
r
i
p
t
,
 
R
e
m
o
t
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
{
i
n
p
u
t
C
l
a
s
s
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
F
i
e
l
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
S
t
e
p
.
k
e
y
 
=
=
=
 
"
f
i
e
l
d
s
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
D
y
n
a
m
i
c
F
i
e
l
d
B
u
i
l
d
e
r
 
f
i
e
l
d
s
=
{
c
u
s
t
o
m
F
i
e
l
d
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
s
e
t
C
u
s
t
o
m
F
i
e
l
d
s
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
S
t
e
p
.
k
e
y
 
=
=
=
 
"
r
o
u
n
d
s
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
u
n
d
s
M
a
n
a
g
e
r
 
r
o
u
n
d
s
=
{
r
o
u
n
d
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
s
e
t
R
o
u
n
d
s
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
S
t
e
p
.
k
e
y
 
=
=
=
 
"
r
e
v
i
e
w
"
 
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
s
p
a
c
e
-
y
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
v
i
e
w
I
t
e
m
 
l
a
b
e
l
=
"
T
i
t
l
e
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
t
i
t
l
e
 
|
|
 
"
,
"
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
v
i
e
w
I
t
e
m
 
l
a
b
e
l
=
"
C
o
m
p
a
n
y
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
o
m
p
a
n
y
 
|
|
 
"
,
"
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
v
i
e
w
I
t
e
m
 
l
a
b
e
l
=
"
L
o
c
a
t
i
o
n
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
l
o
c
a
t
i
o
n
 
|
|
 
"
,
"
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
v
i
e
w
I
t
e
m
 
l
a
b
e
l
=
"
S
a
l
a
r
y
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
a
l
a
r
y
 
|
|
 
"
,
"
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
v
i
e
w
I
t
e
m
 
l
a
b
e
l
=
"
D
e
a
d
l
i
n
e
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
d
e
a
d
l
i
n
e
 
|
|
 
"
N
o
 
d
e
a
d
l
i
n
e
"
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
v
i
e
w
I
t
e
m
 
l
a
b
e
l
=
"
T
a
g
s
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
t
a
g
s
 
|
|
 
"
N
o
n
e
"
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
v
i
e
w
I
t
e
m


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
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
 
?
 
`
$
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
.
s
l
i
c
e
(
0
,
 
1
4
0
)
}
$
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
.
l
e
n
g
t
h
 
>
 
1
4
0
 
?
 
"
…
"
 
:
 
"
"
}
`
 
:
 
"
,
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
v
i
e
w
I
t
e
m
 
l
a
b
e
l
=
"
C
u
s
t
o
m
 
f
i
e
l
d
s
"
 
v
a
l
u
e
=
{
`
$
{
c
u
s
t
o
m
F
i
e
l
d
s
.
l
e
n
g
t
h
}
 
f
i
e
l
d
$
{
c
u
s
t
o
m
F
i
e
l
d
s
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
 
1
 
?
 
"
"
 
:
 
"
s
"
}
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
R
e
v
i
e
w
I
t
e
m
 
l
a
b
e
l
=
"
H
i
r
i
n
g
 
r
o
u
n
d
s
"
 
v
a
l
u
e
=
{
`
$
{
r
o
u
n
d
s
.
l
e
n
g
t
h
}
 
r
o
u
n
d
$
{
r
o
u
n
d
s
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
 
1
 
?
 
"
"
 
:
 
"
s
"
}
`
}
 
/
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
u
n
d
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
u
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
m
t
-
4
 
p
t
-
4
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
s
p
a
c
e
-
y
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
u
n
d
s
.
m
a
p
(
(
r
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
i
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
3
 
t
e
x
t
-
s
m
"
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
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
t
a
b
u
l
a
r
-
n
u
m
s
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
w
-
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
(
i
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
t
o
n
e
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
s
t
o
n
e
-
5
0
 
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
"
>
{
r
.
n
a
m
e
 
|
|
 
"
U
n
t
i
t
l
e
d
 
r
o
u
n
d
"
}
<
/
s
p
a
n
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
[
1
1
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
c
u
s
t
o
m
F
i
e
l
d
s
.
l
e
n
g
t
h
}
 
f
i
e
l
d
s
 
·
 
{
r
.
e
v
a
l
u
a
t
i
o
n
C
r
i
t
e
r
i
a
.
l
e
n
g
t
h
}
 
c
r
i
t
e
r
i
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
m
t
-
5
 
p
t
-
5
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
h
e
 
j
o
b
 
w
i
l
l
 
b
e
 
s
a
v
e
d
 
a
s
 
a
 
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
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
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
t
e
x
t
-
s
t
o
n
e
-
3
0
0
"
>
d
r
a
f
t
<
/
s
p
a
n
>
.
 
P
u
b
l
i
s
h
 
i
t
 
f
r
o
m
 
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
c
r
u
i
t
e
r
s
/
j
o
b
s
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
s
t
o
n
e
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
s
t
o
n
e
-
5
0
 
u
n
d
e
r
l
i
n
e
 
d
e
c
o
r
a
t
i
o
n
-
l
i
m
e
-
4
0
0
 
d
e
c
o
r
a
t
i
o
n
-
2
 
u
n
d
e
r
l
i
n
e
-
o
f
f
s
e
t
-
4
"
>
M
y
 
J
o
b
s
<
/
L
i
n
k
>
 
w
h
e
n
 
y
o
u
'
r
e
 
r
e
a
d
y
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
}


 
 
 
 
 
 
 
 
 
 
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
s
e
c
t
i
o
n
>




 
 
 
 
 
 
 
 
{
/
*
 
N
a
v
i
g
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
 
m
t
-
6
 
m
b
-
1
2
"
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


 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
m
d
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
 
s
e
t
S
t
e
p
I
d
x
(
M
a
t
h
.
m
a
x
(
0
,
 
s
t
e
p
I
d
x
 
-
 
1
)
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
s
t
e
p
I
d
x
 
=
=
=
 
0
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
L
e
f
t
 
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


 
 
 
 
 
 
 
 
 
 
 
 
P
r
e
v
i
o
u
s


 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>




 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
I
d
x
 
<
 
S
T
E
P
S
.
l
e
n
g
t
h
 
-
 
1
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
p
r
i
m
a
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
m
d
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
 
s
e
t
S
t
e
p
I
d
x
(
s
t
e
p
I
d
x
 
+
 
1
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
!
c
a
n
A
d
v
a
n
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
R
i
g
h
t
 
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


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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
p
r
i
m
a
r
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
m
d
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
S
u
b
m
i
t
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
 
|
|
 
!
b
a
s
i
c
s
C
o
m
p
l
e
t
e
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
"
C
r
e
a
t
i
n
g
.
.
.
"
 
:
 
"
C
r
e
a
t
e
 
j
o
b
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
 
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


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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


 
 
)
;


}




f
u
n
c
t
i
o
n
 
i
n
p
u
t
C
l
a
s
s
(
)
 
{


 
 
r
e
t
u
r
n
 
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
3
 
p
y
-
2
.
5
 
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
s
t
o
n
e
-
9
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
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
s
t
o
n
e
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
s
t
o
n
e
-
5
0
 
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
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
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
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
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
/
3
0
 
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
"
;


}




f
u
n
c
t
i
o
n
 
F
i
e
l
d
(
{


 
 
l
a
b
e
l
,


 
 
r
e
q
u
i
r
e
d
,


 
 
h
t
m
l
F
o
r
,


 
 
h
i
n
t
,


 
 
c
h
i
l
d
r
e
n
,


}
:
 
{


 
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
r
e
q
u
i
r
e
d
?
:
 
b
o
o
l
e
a
n
;


 
 
h
t
m
l
F
o
r
?
:
 
s
t
r
i
n
g
;


 
 
h
i
n
t
?
:
 
s
t
r
i
n
g
;


 
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


}
)
 
{


 
 
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
>


 
 
 
 
 
 
<
l
a
b
e
l


 
 
 
 
 
 
 
 
h
t
m
l
F
o
r
=
{
h
t
m
l
F
o
r
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
x
s
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
2
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
 
 
{
r
e
q
u
i
r
e
d
 
&
&
 
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
l
i
m
e
-
5
0
0
 
m
l
-
1
"
>
*
<
/
s
p
a
n
>
}


 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
 
 
{
h
i
n
t
 
&
&
 
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
x
s
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
m
t
-
1
.
5
"
>
{
h
i
n
t
}
<
/
p
>
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
R
e
v
i
e
w
I
t
e
m
(
{
 
l
a
b
e
l
,
 
v
a
l
u
e
 
}
:
 
{
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
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
 
}
)
 
{


 
 
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
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
4
 
p
y
-
2
"
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
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
w
-
3
6
 
s
h
r
i
n
k
-
0
 
p
t
-
1
"
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
<
/
s
p
a
n
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
s
t
o
n
e
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
s
t
o
n
e
-
5
0
 
m
i
n
-
w
-
0
 
f
l
e
x
-
1
"
>
{
v
a
l
u
e
}
<
/
s
p
a
n
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


