
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


 
 
P
l
u
s
C
i
r
c
l
e
,


 
 
U
s
e
r
s
,


 
 
B
a
r
C
h
a
r
t
3
,


 
 
E
d
i
t
,


 
 
T
r
a
s
h
2
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


 
 
M
a
p
P
i
n
,


 
 
W
a
l
l
e
t
,


 
 
C
a
l
e
n
d
a
r
D
a
y
s
,


 
 
S
e
a
r
c
h
 
a
s
 
S
e
a
r
c
h
I
c
o
n
,


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
 
J
o
b
S
t
a
t
u
s
 
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
 
t
y
p
e
 
{
 
J
o
b
 
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
 
{
 
C
o
n
f
i
r
m
D
i
a
l
o
g
 
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
C
o
n
f
i
r
m
D
i
a
l
o
g
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




t
y
p
e
 
S
t
a
t
u
s
F
i
l
t
e
r
 
=
 
"
A
L
L
"
 
|
 
J
o
b
S
t
a
t
u
s
;




c
o
n
s
t
 
S
T
A
T
U
S
_
T
A
B
S
:
 
{
 
k
e
y
:
 
S
t
a
t
u
s
F
i
l
t
e
r
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
A
L
L
"
,
 
l
a
b
e
l
:
 
"
a
l
l
"
 
}
,


 
 
.
.
.
O
b
j
e
c
t
.
v
a
l
u
e
s
(
J
o
b
S
t
a
t
u
s
)
.
m
a
p
(
(
s
t
a
t
u
s
)
 
=
>
 
(
{


 
 
 
 
k
e
y
:
 
s
t
a
t
u
s
 
a
s
 
S
t
a
t
u
s
F
i
l
t
e
r
,


 
 
 
 
l
a
b
e
l
:
 
s
t
a
t
u
s
.
t
o
L
o
w
e
r
C
a
s
e
(
)
,


 
 
}
)
)
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
 
R
e
c
r
u
i
t
e
r
J
o
b
s
L
i
s
t
(
)
 
{


 
 
c
o
n
s
t
 
[
j
o
b
s
,
 
s
e
t
J
o
b
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
J
o
b
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
t
r
u
e
)
;


 
 
c
o
n
s
t
 
[
t
a
b
,
 
s
e
t
T
a
b
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
S
t
a
t
u
s
F
i
l
t
e
r
>
(
"
A
L
L
"
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
,
 
s
e
t
S
e
a
r
c
h
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
j
o
b
T
o
D
e
l
e
t
e
,
 
s
e
t
J
o
b
T
o
D
e
l
e
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
<
J
o
b
 
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
i
s
D
e
l
e
t
i
n
g
,
 
s
e
t
I
s
D
e
l
e
t
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


 
 
 
 
a
p
i


 
 
 
 
 
 
.
g
e
t
(
"
/
j
o
b
s
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
m
y
-
j
o
b
s
"
)


 
 
 
 
 
 
.
t
h
e
n
(
(
r
e
s
)
 
=
>
 
{


 
 
 
 
 
 
 
 
s
e
t
J
o
b
s
(
r
e
s
.
d
a
t
a
.
j
o
b
s
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


 
 
 
 
 
 
}
)


 
 
 
 
 
 
.
c
a
t
c
h
(
(
)
 
=
>
 
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
D
e
l
e
t
e
 
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
!
j
o
b
T
o
D
e
l
e
t
e
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
I
s
D
e
l
e
t
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


 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
d
e
l
e
t
e
(
`
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
T
o
D
e
l
e
t
e
.
i
d
}
`
)
;


 
 
 
 
 
 
s
e
t
J
o
b
s
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
.
f
i
l
t
e
r
(
(
j
)
 
=
>
 
j
.
i
d
 
!
=
=
 
j
o
b
T
o
D
e
l
e
t
e
.
i
d
)
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
J
o
b
 
d
e
l
e
t
e
d
"
)
;


 
 
 
 
 
 
s
e
t
J
o
b
T
o
D
e
l
e
t
e
(
n
u
l
l
)
;


 
 
 
 
}
 
c
a
t
c
h
 
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
F
a
i
l
e
d
 
t
o
 
d
e
l
e
t
e
 
j
o
b
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
I
s
D
e
l
e
t
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
t
a
t
u
s
C
h
a
n
g
e
 
=
 
a
s
y
n
c
 
(
i
d
:
 
n
u
m
b
e
r
,
 
s
t
a
t
u
s
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
a
t
c
h
(
`
/
j
o
b
s
/
$
{
i
d
}
/
s
t
a
t
u
s
`
,
 
{
 
s
t
a
t
u
s
 
}
)
;


 
 
 
 
 
 
s
e
t
J
o
b
s
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
.
m
a
p
(
(
j
)
 
=
>
 
(
j
.
i
d
 
=
=
=
 
i
d
 
?
 
{
 
.
.
.
j
,
 
s
t
a
t
u
s
:
 
d
a
t
a
.
j
o
b
.
s
t
a
t
u
s
 
}
 
:
 
j
)
)
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
J
o
b
 
s
t
a
t
u
s
 
u
p
d
a
t
e
d
"
)
;


 
 
 
 
}
 
c
a
t
c
h
 
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
F
a
i
l
e
d
 
t
o
 
u
p
d
a
t
e
 
s
t
a
t
u
s
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
 
c
o
u
n
t
s
 
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
 
{


 
 
 
 
c
o
n
s
t
 
b
a
s
e
 
=
 
{
 
A
L
L
:
 
j
o
b
s
.
l
e
n
g
t
h
 
}
 
a
s
 
R
e
c
o
r
d
<
S
t
a
t
u
s
F
i
l
t
e
r
,
 
n
u
m
b
e
r
>
;


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
s
t
a
t
u
s
 
o
f
 
O
b
j
e
c
t
.
v
a
l
u
e
s
(
J
o
b
S
t
a
t
u
s
)
)
 
{


 
 
 
 
 
 
b
a
s
e
[
s
t
a
t
u
s
]
 
=
 
0
;


 
 
 
 
}


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
j
 
o
f
 
j
o
b
s
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
s
t
a
t
u
s
 
=
 
j
.
s
t
a
t
u
s
 
a
s
 
S
t
a
t
u
s
F
i
l
t
e
r
;


 
 
 
 
 
 
i
f
 
(
s
t
a
t
u
s
 
i
n
 
b
a
s
e
)
 
{


 
 
 
 
 
 
 
 
b
a
s
e
[
s
t
a
t
u
s
]
+
+
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
b
a
s
e
;


 
 
}
,
 
[
j
o
b
s
]
)
;




 
 
c
o
n
s
t
 
f
i
l
t
e
r
e
d
J
o
b
s
 
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
 
{


 
 
 
 
c
o
n
s
t
 
q
 
=
 
s
e
a
r
c
h
.
t
r
i
m
(
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
;


 
 
 
 
r
e
t
u
r
n
 
j
o
b
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
j
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
t
a
b
 
!
=
=
 
"
A
L
L
"
 
&
&
 
j
.
s
t
a
t
u
s
 
!
=
=
 
t
a
b
)
 
r
e
t
u
r
n
 
f
a
l
s
e
;


 
 
 
 
 
 
i
f
 
(
!
q
)
 
r
e
t
u
r
n
 
t
r
u
e
;


 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
j
.
t
i
t
l
e
.
t
o
L
o
w
e
r
C
a
s
e
(
)
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
q
)
 
|
|


 
 
 
 
 
 
 
 
j
.
c
o
m
p
a
n
y
.
t
o
L
o
w
e
r
C
a
s
e
(
)
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
q
)
 
|
|


 
 
 
 
 
 
 
 
j
.
l
o
c
a
t
i
o
n
.
t
o
L
o
w
e
r
C
a
s
e
(
)
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
q
)
 
|
|


 
 
 
 
 
 
 
 
j
.
t
a
g
s
?
.
s
o
m
e
(
(
t
)
 
=
>
 
t
.
t
o
L
o
w
e
r
C
a
s
e
(
)
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
q
)
)


 
 
 
 
 
 
)
;


 
 
 
 
}
)
;


 
 
}
,
 
[
j
o
b
s
,
 
t
a
b
,
 
s
e
a
r
c
h
]
)
;




 
 
c
o
n
s
t
 
t
o
t
a
l
A
p
p
l
i
c
a
n
t
s
 
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
 
j
o
b
s
.
r
e
d
u
c
e
(
(
s
u
m
,
 
j
)
 
=
>
 
s
u
m
 
+
 
(
j
.
_
c
o
u
n
t
?
.
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
 
?
?
 
0
)
,
 
0
)
,


 
 
 
 
[
j
o
b
s
]
,


 
 
)
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
M
y
 
J
o
b
 
L
i
s
t
i
n
g
s
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
C
o
n
f
i
r
m
D
i
a
l
o
g


 
 
 
 
 
 
 
 
o
p
e
n
=
{
j
o
b
T
o
D
e
l
e
t
e
 
!
=
=
 
n
u
l
l
}


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
D
e
l
e
t
e
 
J
o
b
?
"


 
 
 
 
 
 
 
 
c
o
n
f
i
r
m
L
a
b
e
l
=
"
D
e
l
e
t
e
"


 
 
 
 
 
 
 
 
c
a
n
c
e
l
L
a
b
e
l
=
"
C
a
n
c
e
l
"


 
 
 
 
 
 
 
 
c
o
n
f
i
r
m
V
a
r
i
a
n
t
=
"
d
a
n
g
e
r
"


 
 
 
 
 
 
 
 
l
o
a
d
i
n
g
=
{
i
s
D
e
l
e
t
i
n
g
}


 
 
 
 
 
 
 
 
o
n
C
a
n
c
e
l
=
{
(
)
 
=
>
 
s
e
t
J
o
b
T
o
D
e
l
e
t
e
(
n
u
l
l
)
}


 
 
 
 
 
 
 
 
o
n
C
o
n
f
i
r
m
=
{
h
a
n
d
l
e
D
e
l
e
t
e
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
j
o
b
T
o
D
e
l
e
t
e
 
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
4
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
s
t
o
n
e
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
r
e
 
y
o
u
 
s
u
r
e
 
y
o
u
 
w
a
n
t
 
t
o
 
d
e
l
e
t
e
 
<
s
t
r
o
n
g
 
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
w
h
i
t
e
"
>
{
j
o
b
T
o
D
e
l
e
t
e
.
t
i
t
l
e
}
<
/
s
t
r
o
n
g
>
?
 
T
h
i
s
 
a
c
t
i
o
n
 
i
s
 
i
r
r
e
v
e
r
s
i
b
l
e
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


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
C
o
n
f
i
r
m
D
i
a
l
o
g
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
6
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
 
i
t
e
m
s
-
e
n
d
 
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
 
g
a
p
-
6
 
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
 
p
b
-
8
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
i
n
-
w
-
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
 
m
y
 
j
o
b
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
r
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
j
o
b
 
p
o
s
t
s
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
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
d
i
t
 
p
o
s
t
i
n
g
s
,
 
m
o
v
e
 
t
h
e
m
 
t
h
r
o
u
g
h
 
d
r
a
f
t
 
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
e
d
 
s
t
a
t
e
s
,
 
a
n
d
 
j
u
m
p
 
i
n
t
o
 
a
p
p
l
i
c
a
n
t
s
 
o
r
 
a
n
a
l
y
t
i
c
s
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
e
n
d
 
g
a
p
-
6
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
h
i
d
d
e
n
 
s
m
:
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
5
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
o
s
t
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
s
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
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
p
p
l
i
c
a
n
t
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
A
p
p
l
i
c
a
n
t
s
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
B
u
t
t
o
n
 
a
s
C
h
i
l
d
 
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
/
c
r
e
a
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
"
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
u
s
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
o
s
t
 
a
 
j
o
b


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
 
T
a
b
s
 
+
 
S
e
a
r
c
h
 
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
m
b
-
8
 
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
 
g
a
p
-
4
 
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
6
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
S
T
A
T
U
S
_
T
A
B
S
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
t
a
b
 
=
=
=
 
t
.
k
e
y
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
u
n
t
 
=
 
c
o
u
n
t
s
[
t
.
k
e
y
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
.
k
e
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
T
a
b
(
t
.
k
e
y
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
r
e
l
a
t
i
v
e
 
p
b
-
3
 
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
 
b
o
r
d
e
r
-
0
 
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
 
$
{
a
c
t
i
v
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
7
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
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
.
l
a
b
e
l
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
c
o
u
n
t
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
v
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t
I
d
=
"
j
o
b
s
-
t
a
b
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
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
p
x
 
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
0
.
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
;


 
 
 
 
 
 
 
 
 
 
 
 
}
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
r
e
l
a
t
i
v
e
 
p
b
-
3
 
w
-
f
u
l
l
 
s
m
:
w
-
6
4
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
a
r
c
h
I
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
"
a
b
s
o
l
u
t
e
 
l
e
f
t
-
3
 
t
o
p
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
y
-
[
c
a
l
c
(
5
0
%
+
6
p
x
)
]
 
w
-
3
.
5
 
h
-
3
.
5
 
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
"
 
/
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
s
e
a
r
c
h
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
S
e
a
r
c
h
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
S
e
a
r
c
h
 
t
i
t
l
e
,
 
c
o
m
p
a
n
y
,
 
t
a
g
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
l
-
9
 
p
r
-
3
 
p
y
-
2
 
t
e
x
t
-
s
m
 
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
2
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


 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
?
 
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
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
3
 
}
)
.
m
a
p
(
(
_
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
p
-
5
 
a
n
i
m
a
t
e
-
p
u
l
s
e
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
h
-
5
 
w
-
1
/
3
 
b
g
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
g
-
s
t
o
n
e
-
8
0
0
 
r
o
u
n
d
e
d
 
m
b
-
3
"
 
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
h
-
3
 
w
-
1
/
2
 
b
g
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
g
-
s
t
o
n
e
-
8
0
0
 
r
o
u
n
d
e
d
 
m
b
-
5
"
 
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
 
g
a
p
-
3
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
h
-
3
 
w
-
2
0
 
b
g
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
g
-
s
t
o
n
e
-
8
0
0
 
r
o
u
n
d
e
d
"
 
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
h
-
3
 
w
-
2
0
 
b
g
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
g
-
s
t
o
n
e
-
8
0
0
 
r
o
u
n
d
e
d
"
 
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
h
-
3
 
w
-
2
0
 
b
g
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
g
-
s
t
o
n
e
-
8
0
0
 
r
o
u
n
d
e
d
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
 
:
 
j
o
b
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
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
E
m
p
t
y
S
t
a
t
e


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
N
o
 
j
o
b
s
 
y
e
t
"


 
 
 
 
 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
=
"
P
o
s
t
 
y
o
u
r
 
f
i
r
s
t
 
r
o
l
e
 
a
n
d
 
s
t
a
r
t
 
r
e
c
e
i
v
i
n
g
 
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
.
"


 
 
 
 
 
 
 
 
 
 
 
 
c
t
a


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
 
:
 
f
i
l
t
e
r
e
d
J
o
b
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
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
E
m
p
t
y
S
t
a
t
e


 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
N
o
 
j
o
b
s
 
m
a
t
c
h
 
y
o
u
r
 
s
e
a
r
c
h
"


 
 
 
 
 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
a
r
c
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
`
N
o
t
h
i
n
g
 
m
a
t
c
h
e
s
 
"
$
{
s
e
a
r
c
h
}
"
 
i
n
 
t
h
i
s
 
v
i
e
w
.
`


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
`
N
o
 
$
{
t
a
b
.
t
o
L
o
w
e
r
C
a
s
e
(
)
}
 
j
o
b
s
 
r
i
g
h
t
 
n
o
w
.
`


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
e
a
r
=
{
(
)
 
=
>
 
{
 
s
e
t
S
e
a
r
c
h
(
"
"
)
;
 
s
e
t
T
a
b
(
"
A
L
L
"
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
 
:
 
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
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
J
o
b
s
.
m
a
p
(
(
j
o
b
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
l
i


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
j
o
b
.
i
d
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
e
l
a
y
:
 
i
 
*
 
0
.
0
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
g
r
o
u
p
 
r
e
l
a
t
i
v
e
 
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
 
p
-
5
 
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
c
o
l
 
l
g
:
f
l
e
x
-
r
o
w
 
l
g
:
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
 
l
g
:
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
 
g
a
p
-
5
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
 
f
l
e
x
-
w
r
a
p
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
{
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
s
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
.
i
d
}
/
e
d
i
t
`
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
l
g
 
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
 
t
r
u
n
c
a
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
1
.
5
 
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
h
-
1
.
5
 
w
-
1
.
5
 
$
{
g
e
t
S
t
a
t
u
s
D
o
t
(
j
o
b
.
s
t
a
t
u
s
)
}
`
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
s
t
a
t
u
s
.
t
o
L
o
w
e
r
C
a
s
e
(
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
 
f
l
e
x
-
w
r
a
p
 
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
x
-
4
 
g
a
p
-
y
-
1
.
5
 
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
 
m
b
-
3
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
r
i
e
f
c
a
s
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
3
.
5
 
h
-
3
.
5
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
c
o
m
p
a
n
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
l
o
c
a
t
i
o
n
 
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
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
p
P
i
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
w
-
3
.
5
 
h
-
3
.
5
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
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
j
o
b
.
s
a
l
a
r
y
 
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
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
W
a
l
l
e
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
.
5
 
h
-
3
.
5
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
s
a
l
a
r
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
j
o
b
.
d
e
a
d
l
i
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
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
l
e
n
d
a
r
D
a
y
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
3
.
5
 
h
-
3
.
5
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
e
w
 
D
a
t
e
(
j
o
b
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
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
"
e
n
-
U
S
"
,
 
{
 
m
o
n
t
h
:
 
"
s
h
o
r
t
"
,
 
d
a
y
:
 
"
n
u
m
e
r
i
c
"
,
 
y
e
a
r
:
 
"
n
u
m
e
r
i
c
"
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
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
4
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
p
p
l
i
c
a
n
t
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
o
l
d
 
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
 
m
l
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
_
c
o
u
n
t
?
.
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
 
?
?
 
0
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
u
n
d
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
b
o
l
d
 
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
 
m
l
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
_
c
o
u
n
t
?
.
r
o
u
n
d
s
 
?
?
 
0
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
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
t
a
g
s
 
&
&
 
j
o
b
.
t
a
g
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
s
t
o
n
e
-
4
0
0
 
n
o
r
m
a
l
-
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
n
o
r
m
a
l
 
f
o
n
t
-
s
a
n
s
 
t
e
x
t
-
x
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
t
a
g
s
.
s
l
i
c
e
(
0
,
 
4
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
j
o
b
.
t
a
g
s
.
l
e
n
g
t
h
 
>
 
4
 
&
&
 
`
 
+
$
{
j
o
b
.
t
a
g
s
.
l
e
n
g
t
h
 
-
 
4
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
c
t
i
o
n
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
 
s
h
r
i
n
k
-
0
 
f
l
e
x
-
w
r
a
p
"
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
j
o
b
.
s
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
 
h
a
n
d
l
e
S
t
a
t
u
s
C
h
a
n
g
e
(
j
o
b
.
i
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
"
C
h
a
n
g
e
 
j
o
b
 
s
t
a
t
u
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
 
p
x
-
2
.
5
 
p
y
-
1
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
2
0
 
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
D
R
A
F
T
"
>
D
r
a
f
t
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
P
U
B
L
I
S
H
E
D
"
>
P
u
b
l
i
s
h
e
d
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
C
L
O
S
E
D
"
>
C
l
o
s
e
d
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
A
R
C
H
I
V
E
D
"
>
A
r
c
h
i
v
e
d
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
I
c
o
n
A
c
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
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
s
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
.
i
d
}
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
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
U
s
e
r
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
c
o
n
A
c
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
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
s
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
.
i
d
}
/
a
n
a
l
y
t
i
c
s
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
B
a
r
C
h
a
r
t
3
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
A
n
a
l
y
t
i
c
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
c
o
n
A
c
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
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
s
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
.
i
d
}
/
e
d
i
t
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
E
d
i
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
E
d
i
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
J
o
b
T
o
D
e
l
e
t
e
(
j
o
b
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
D
e
l
e
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
"
D
e
l
e
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
"
p
-
2
 
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
t
o
n
e
-
4
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
r
e
d
-
4
0
0
 
h
o
v
e
r
:
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
h
o
v
e
r
:
b
g
-
r
e
d
-
9
0
0
/
2
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
 
b
o
r
d
e
r
-
0
 
b
g
-
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
T
r
a
s
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
b
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
 
I
c
o
n
A
c
t
i
o
n
(
{


 
 
t
o
,


 
 
i
c
o
n
:
 
I
c
o
n
,


 
 
l
a
b
e
l
,


}
:
 
{


 
 
t
o
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
L
i
n
k


 
 
 
 
 
 
t
o
=
{
t
o
}


 
 
 
 
 
 
t
i
t
l
e
=
{
l
a
b
e
l
}


 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{
l
a
b
e
l
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
2
 
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
t
o
n
e
-
4
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
 
h
o
v
e
r
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
1
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
g
-
s
t
o
n
e
-
8
0
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
"


 
 
 
 
>


 
 
 
 
 
 
<
I
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
L
i
n
k
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
 
E
m
p
t
y
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
,


 
 
m
e
s
s
a
g
e
,


 
 
c
t
a
 
=
 
f
a
l
s
e
,


 
 
o
n
C
l
e
a
r
,


}
:
 
{


 
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
c
t
a
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


 
 
o
n
C
l
e
a
r
?
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
 
p
x
-
6
 
p
y
-
1
6
 
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
w
-
1
0
 
h
-
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
 
b
g
-
s
t
o
n
e
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
g
-
s
t
o
n
e
-
8
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
 
m
x
-
a
u
t
o
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
<
B
r
i
e
f
c
a
s
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
=
"
t
r
u
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
h
3
 
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
b
o
l
d
 
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
b
-
1
"
>
{
t
i
t
l
e
}
<
/
h
3
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
a
x
-
w
-
s
m
 
m
x
-
a
u
t
o
 
m
b
-
5
"
>
{
m
e
s
s
a
g
e
}
<
/
p
>


 
 
 
 
 
 
{
c
t
a
 
&
&
 
(


 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
a
s
C
h
i
l
d
 
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
/
c
r
e
a
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
"
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
u
s
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
P
o
s
t
 
y
o
u
r
 
f
i
r
s
t
 
j
o
b


 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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


 
 
 
 
 
 
{
o
n
C
l
e
a
r
 
&
&
 
(


 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
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
e
a
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
 
u
n
d
e
r
l
i
n
e
 
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
 
b
o
r
d
e
r
-
0
 
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


 
 
 
 
 
 
 
 
 
 
C
l
e
a
r
 
f
i
l
t
e
r
s


 
 
 
 
 
 
 
 
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
 
g
e
t
S
t
a
t
u
s
D
o
t
(
s
t
a
t
u
s
:
 
s
t
r
i
n
g
)
 
{


 
 
s
w
i
t
c
h
 
(
s
t
a
t
u
s
)
 
{


 
 
 
 
c
a
s
e
 
"
P
U
B
L
I
S
H
E
D
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
"
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
;


 
 
 
 
c
a
s
e
 
"
D
R
A
F
T
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
"
b
g
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
;


 
 
 
 
c
a
s
e
 
"
C
L
O
S
E
D
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
"
b
g
-
r
e
d
-
5
0
0
"
;


 
 
 
 
c
a
s
e
 
"
A
R
C
H
I
V
E
D
"
:


 
 
 
 
 
 
r
e
t
u
r
n
 
"
b
g
-
a
m
b
e
r
-
5
0
0
"
;


 
 
 
 
d
e
f
a
u
l
t
:


 
 
 
 
 
 
r
e
t
u
r
n
 
"
b
g
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
;


 
 
}


}
