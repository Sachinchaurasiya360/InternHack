
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
 
B
o
o
k
O
p
e
n
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
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
 
{


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


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
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
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
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


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
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
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
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
I
n
l
i
n
e
C
o
d
e
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


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
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
s
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
B
+
 
t
r
e
e
 
m
o
d
e
l
 
(
o
r
d
e
r
 
M
 
=
 
4
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
M
 
=
 
4
;


c
o
n
s
t
 
M
A
X
_
K
E
Y
S
 
=
 
M
 
-
 
1
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
 
B
P
N
o
d
e
 
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


 
 
i
s
L
e
a
f
:
 
b
o
o
l
e
a
n
;


 
 
k
e
y
s
:
 
n
u
m
b
e
r
[
]
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
 
s
t
r
i
n
g
[
]
;


 
 
n
e
x
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


 
 
p
a
r
e
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


 
 
h
i
g
h
l
i
g
h
t
?
:
 
"
a
c
t
i
v
e
"
 
|
 
"
s
p
l
i
t
"
 
|
 
"
s
c
a
n
"
 
|
 
"
m
a
t
c
h
"
 
|
 
"
c
o
m
p
a
r
e
"
;


}




i
n
t
e
r
f
a
c
e
 
B
P
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
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
 
|
 
n
u
m
b
e
r
 
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
>
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


 
 
n
o
d
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
 
B
P
N
o
d
e
>
;


 
 
r
o
o
t
I
d
?
:
 
s
t
r
i
n
g
;


 
 
s
c
a
n
P
a
t
h
?
:
 
s
t
r
i
n
g
[
]
;


 
 
s
c
a
n
R
e
s
u
l
t
?
:
 
n
u
m
b
e
r
[
]
;


 
 
f
l
a
s
h
K
e
y
?
:
 
s
t
r
i
n
g
;


}




c
o
n
s
t
 
P
S
E
U
D
O
_
I
N
S
E
R
T
 
=
 
[


 
 
"
#
 
B
+
 
t
r
e
e
 
i
n
s
e
r
t
 
(
o
r
d
e
r
 
M
 
=
 
4
)
"
,


 
 
"
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
s
e
r
t
(
k
e
y
)
:
"
,


 
 
"
 
 
l
e
a
f
 
←
 
d
e
s
c
e
n
d
 
f
r
o
m
 
r
o
o
t
 
u
s
i
n
g
 
r
o
u
t
i
n
g
 
k
e
y
s
"
,


 
 
"
 
 
i
n
s
e
r
t
 
k
e
y
 
i
n
t
o
 
l
e
a
f
 
i
n
 
s
o
r
t
e
d
 
p
o
s
i
t
i
o
n
"
,


 
 
"
 
 
i
f
 
l
e
a
f
.
k
e
y
s
.
l
e
n
g
t
h
 
>
 
M
-
1
:
"
,


 
 
"
 
 
 
 
s
p
l
i
t
 
l
e
a
f
 
i
n
t
o
 
L
,
 
R
"
,


 
 
"
 
 
 
 
p
r
o
m
o
t
e
 
f
i
r
s
t
 
k
e
y
 
o
f
 
R
 
i
n
t
o
 
p
a
r
e
n
t
"
,


 
 
"
 
 
 
 
r
e
l
i
n
k
 
l
e
a
v
e
s
:
 
L
.
n
e
x
t
 
=
 
R
;
 
R
.
n
e
x
t
 
=
 
o
l
d
 
n
e
x
t
"
,


 
 
"
 
 
 
 
i
f
 
p
a
r
e
n
t
 
o
v
e
r
f
l
o
w
s
,
 
r
e
c
u
r
s
e
 
u
p
w
a
r
d
"
,


 
 
"
 
 
 
 
i
f
 
r
o
o
t
 
o
v
e
r
f
l
o
w
s
,
 
c
r
e
a
t
e
 
n
e
w
 
r
o
o
t
"
,


]
;




c
o
n
s
t
 
P
S
E
U
D
O
_
R
A
N
G
E
 
=
 
[


 
 
"
#
 
R
a
n
g
e
 
s
c
a
n
 
[
l
o
,
 
h
i
]
,
 
t
h
e
 
B
+
 
t
r
e
e
 
a
d
v
a
n
t
a
g
e
"
,


 
 
"
f
u
n
c
t
i
o
n
 
r
a
n
g
e
S
c
a
n
(
l
o
,
 
h
i
)
:
"
,


 
 
"
 
 
l
e
a
f
 
←
 
d
e
s
c
e
n
d
 
f
r
o
m
 
r
o
o
t
 
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
 
l
o
"
,


 
 
"
 
 
s
c
a
n
 
k
e
y
s
 
i
n
 
t
h
i
s
 
l
e
a
f
 
≥
 
l
o
"
,


 
 
"
 
 
w
h
i
l
e
 
l
e
a
f
.
n
e
x
t
 
e
x
i
s
t
s
 
a
n
d
 
l
e
a
f
.
l
a
s
t
 
<
 
h
i
:
"
,


 
 
"
 
 
 
 
l
e
a
f
 
←
 
l
e
a
f
.
n
e
x
t
 
 
 
 
 
 
 
#
 
F
O
L
L
O
W
 
T
H
E
 
L
E
A
F
 
C
H
A
I
N
"
,


 
 
"
 
 
 
 
c
o
l
l
e
c
t
 
k
e
y
s
 
i
n
 
[
l
o
,
 
h
i
]
"
,


 
 
"
 
 
r
e
t
u
r
n
 
c
o
l
l
e
c
t
e
d
 
 
 
#
 
O
(
l
o
g
 
n
 
+
 
k
)
,
 
k
 
=
 
m
a
t
c
h
e
s
"
,


]
;




l
e
t
 
n
e
x
t
I
d
 
=
 
0
;


c
o
n
s
t
 
m
k
I
d
 
=
 
(
)
 
=
>
 
`
b
$
{
n
e
x
t
I
d
+
+
}
`
;


f
u
n
c
t
i
o
n
 
r
e
s
e
t
I
d
s
(
)
 
{
 
n
e
x
t
I
d
 
=
 
0
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
 
c
l
o
n
e
N
o
d
e
s
(
n
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
 
B
P
N
o
d
e
>
)
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
 
B
P
N
o
d
e
>
 
{


 
 
c
o
n
s
t
 
o
u
t
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
 
B
P
N
o
d
e
>
 
=
 
{
}
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
 
k
 
i
n
 
n
s
)
 
o
u
t
[
k
]
 
=
 
{
 
.
.
.
n
s
[
k
]
,
 
k
e
y
s
:
 
[
.
.
.
n
s
[
k
]
.
k
e
y
s
]
,
 
c
h
i
l
d
r
e
n
:
 
[
.
.
.
n
s
[
k
]
.
c
h
i
l
d
r
e
n
]
,
 
h
i
g
h
l
i
g
h
t
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
 
}
;


 
 
r
e
t
u
r
n
 
o
u
t
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
 
b
u
i
l
d
I
n
s
e
r
t
F
r
a
m
e
s
(
k
e
y
s
:
 
n
u
m
b
e
r
[
]
)
:
 
B
P
F
r
a
m
e
[
]
 
{


 
 
r
e
s
e
t
I
d
s
(
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
:
 
B
P
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
n
o
d
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
 
B
P
N
o
d
e
>
 
=
 
{
}
;


 
 
l
e
t
 
r
o
o
t
I
d
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




 
 
c
o
n
s
t
 
s
n
a
p
 
=
 
(


 
 
 
 
l
i
n
e
:
 
n
u
m
b
e
r
,


 
 
 
 
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
,


 
 
 
 
h
i
g
h
l
i
g
h
t
I
d
?
:
 
s
t
r
i
n
g
,


 
 
 
 
h
l
?
:
 
B
P
N
o
d
e
[
"
h
i
g
h
l
i
g
h
t
"
]
,


 
 
 
 
f
l
a
s
h
K
e
y
?
:
 
s
t
r
i
n
g
,


 
 
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
c
l
o
n
e
d
 
=
 
c
l
o
n
e
N
o
d
e
s
(
n
o
d
e
s
)
;


 
 
 
 
i
f
 
(
h
i
g
h
l
i
g
h
t
I
d
 
&
&
 
c
l
o
n
e
d
[
h
i
g
h
l
i
g
h
t
I
d
]
)
 
c
l
o
n
e
d
[
h
i
g
h
l
i
g
h
t
I
d
]
.
h
i
g
h
l
i
g
h
t
 
=
 
h
l
 
?
?
 
"
a
c
t
i
v
e
"
;


 
 
 
 
f
r
a
m
e
s
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
n
o
d
e
s
:
 
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
n
o
d
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
,
 
r
o
o
t
:
 
r
o
o
t
I
d
 
?
?
 
"
-
"
,
 
M
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
,


 
 
 
 
 
 
n
o
d
e
s
:
 
c
l
o
n
e
d
,


 
 
 
 
 
 
r
o
o
t
I
d
,


 
 
 
 
 
 
f
l
a
s
h
K
e
y
,


 
 
 
 
}
)
;


 
 
}
;




 
 
f
u
n
c
t
i
o
n
 
d
e
s
c
e
n
d
T
o
L
e
a
f
(
k
e
y
:
 
n
u
m
b
e
r
)
:
 
s
t
r
i
n
g
 
{


 
 
 
 
l
e
t
 
c
u
r
:
 
s
t
r
i
n
g
 
=
 
r
o
o
t
I
d
!
;


 
 
 
 
w
h
i
l
e
 
(
!
n
o
d
e
s
[
c
u
r
]
.
i
s
L
e
a
f
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
k
 
=
 
n
o
d
e
s
[
c
u
r
]
.
k
e
y
s
;


 
 
 
 
 
 
l
e
t
 
i
 
=
 
0
;


 
 
 
 
 
 
w
h
i
l
e
 
(
i
 
<
 
k
.
l
e
n
g
t
h
 
&
&
 
k
e
y
 
>
=
 
k
[
i
]
)
 
i
+
+
;


 
 
 
 
 
 
c
u
r
 
=
 
n
o
d
e
s
[
c
u
r
]
.
c
h
i
l
d
r
e
n
[
i
]
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
c
u
r
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
s
e
r
t
I
n
t
o
N
o
d
e
(
n
o
d
e
:
 
B
P
N
o
d
e
,
 
k
e
y
:
 
n
u
m
b
e
r
,
 
_
l
e
f
t
C
h
i
l
d
?
:
 
s
t
r
i
n
g
,
 
r
i
g
h
t
C
h
i
l
d
?
:
 
s
t
r
i
n
g
)
 
{


 
 
 
 
l
e
t
 
i
 
=
 
0
;


 
 
 
 
w
h
i
l
e
 
(
i
 
<
 
n
o
d
e
.
k
e
y
s
.
l
e
n
g
t
h
 
&
&
 
n
o
d
e
.
k
e
y
s
[
i
]
 
<
 
k
e
y
)
 
i
+
+
;


 
 
 
 
n
o
d
e
.
k
e
y
s
.
s
p
l
i
c
e
(
i
,
 
0
,
 
k
e
y
)
;


 
 
 
 
i
f
 
(
!
n
o
d
e
.
i
s
L
e
a
f
 
&
&
 
r
i
g
h
t
C
h
i
l
d
)
 
{


 
 
 
 
 
 
n
o
d
e
.
c
h
i
l
d
r
e
n
.
s
p
l
i
c
e
(
i
 
+
 
1
,
 
0
,
 
r
i
g
h
t
C
h
i
l
d
)
;


 
 
 
 
}


 
 
}




 
 
f
u
n
c
t
i
o
n
 
s
p
l
i
t
L
e
a
f
(
l
e
a
f
I
d
:
 
s
t
r
i
n
g
)
:
 
{
 
p
r
o
m
o
t
e
K
e
y
:
 
n
u
m
b
e
r
;
 
r
i
g
h
t
I
d
:
 
s
t
r
i
n
g
 
}
 
{


 
 
 
 
c
o
n
s
t
 
l
e
a
f
 
=
 
n
o
d
e
s
[
l
e
a
f
I
d
]
;


 
 
 
 
c
o
n
s
t
 
m
i
d
 
=
 
M
a
t
h
.
c
e
i
l
(
l
e
a
f
.
k
e
y
s
.
l
e
n
g
t
h
 
/
 
2
)
;


 
 
 
 
c
o
n
s
t
 
r
i
g
h
t
K
e
y
s
 
=
 
l
e
a
f
.
k
e
y
s
.
s
p
l
i
c
e
(
m
i
d
)
;


 
 
 
 
c
o
n
s
t
 
r
i
g
h
t
I
d
 
=
 
m
k
I
d
(
)
;


 
 
 
 
n
o
d
e
s
[
r
i
g
h
t
I
d
]
 
=
 
{


 
 
 
 
 
 
i
d
:
 
r
i
g
h
t
I
d
,


 
 
 
 
 
 
i
s
L
e
a
f
:
 
t
r
u
e
,


 
 
 
 
 
 
k
e
y
s
:
 
r
i
g
h
t
K
e
y
s
,


 
 
 
 
 
 
c
h
i
l
d
r
e
n
:
 
[
]
,


 
 
 
 
 
 
n
e
x
t
:
 
l
e
a
f
.
n
e
x
t
,


 
 
 
 
 
 
p
a
r
e
n
t
:
 
l
e
a
f
.
p
a
r
e
n
t
,


 
 
 
 
}
;


 
 
 
 
l
e
a
f
.
n
e
x
t
 
=
 
r
i
g
h
t
I
d
;


 
 
 
 
r
e
t
u
r
n
 
{
 
p
r
o
m
o
t
e
K
e
y
:
 
r
i
g
h
t
K
e
y
s
[
0
]
,
 
r
i
g
h
t
I
d
 
}
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
 
s
p
l
i
t
I
n
t
e
r
n
a
l
(
n
o
d
e
I
d
:
 
s
t
r
i
n
g
)
:
 
{
 
p
r
o
m
o
t
e
K
e
y
:
 
n
u
m
b
e
r
;
 
r
i
g
h
t
I
d
:
 
s
t
r
i
n
g
 
}
 
{


 
 
 
 
c
o
n
s
t
 
n
 
=
 
n
o
d
e
s
[
n
o
d
e
I
d
]
;


 
 
 
 
c
o
n
s
t
 
m
i
d
 
=
 
M
a
t
h
.
f
l
o
o
r
(
n
.
k
e
y
s
.
l
e
n
g
t
h
 
/
 
2
)
;


 
 
 
 
c
o
n
s
t
 
p
r
o
m
o
t
e
K
e
y
 
=
 
n
.
k
e
y
s
[
m
i
d
]
;


 
 
 
 
c
o
n
s
t
 
r
i
g
h
t
K
e
y
s
 
=
 
n
.
k
e
y
s
.
s
p
l
i
c
e
(
m
i
d
 
+
 
1
)
;


 
 
 
 
c
o
n
s
t
 
r
i
g
h
t
C
h
i
l
d
r
e
n
 
=
 
n
.
c
h
i
l
d
r
e
n
.
s
p
l
i
c
e
(
m
i
d
 
+
 
1
)
;


 
 
 
 
n
.
k
e
y
s
.
p
o
p
(
)
;


 
 
 
 
c
o
n
s
t
 
r
i
g
h
t
I
d
 
=
 
m
k
I
d
(
)
;


 
 
 
 
n
o
d
e
s
[
r
i
g
h
t
I
d
]
 
=
 
{


 
 
 
 
 
 
i
d
:
 
r
i
g
h
t
I
d
,


 
 
 
 
 
 
i
s
L
e
a
f
:
 
f
a
l
s
e
,


 
 
 
 
 
 
k
e
y
s
:
 
r
i
g
h
t
K
e
y
s
,


 
 
 
 
 
 
c
h
i
l
d
r
e
n
:
 
r
i
g
h
t
C
h
i
l
d
r
e
n
,


 
 
 
 
 
 
p
a
r
e
n
t
:
 
n
.
p
a
r
e
n
t
,


 
 
 
 
}
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
 
c
i
d
 
o
f
 
r
i
g
h
t
C
h
i
l
d
r
e
n
)
 
n
o
d
e
s
[
c
i
d
]
.
p
a
r
e
n
t
 
=
 
r
i
g
h
t
I
d
;


 
 
 
 
r
e
t
u
r
n
 
{
 
p
r
o
m
o
t
e
K
e
y
,
 
r
i
g
h
t
I
d
 
}
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
s
e
r
t
W
i
t
h
F
i
x
u
p
(


 
 
 
 
t
a
r
g
e
t
I
d
:
 
s
t
r
i
n
g
,


 
 
 
 
p
r
o
m
o
t
e
K
e
y
:
 
n
u
m
b
e
r
,


 
 
 
 
l
e
f
t
C
h
i
l
d
I
d
:
 
s
t
r
i
n
g
,


 
 
 
 
r
i
g
h
t
C
h
i
l
d
I
d
:
 
s
t
r
i
n
g
,


 
 
)
 
{


 
 
 
 
i
f
 
(
!
n
o
d
e
s
[
t
a
r
g
e
t
I
d
]
.
p
a
r
e
n
t
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
n
e
w
R
o
o
t
I
d
 
=
 
m
k
I
d
(
)
;


 
 
 
 
 
 
n
o
d
e
s
[
n
e
w
R
o
o
t
I
d
]
 
=
 
{


 
 
 
 
 
 
 
 
i
d
:
 
n
e
w
R
o
o
t
I
d
,


 
 
 
 
 
 
 
 
i
s
L
e
a
f
:
 
f
a
l
s
e
,


 
 
 
 
 
 
 
 
k
e
y
s
:
 
[
p
r
o
m
o
t
e
K
e
y
]
,


 
 
 
 
 
 
 
 
c
h
i
l
d
r
e
n
:
 
[
l
e
f
t
C
h
i
l
d
I
d
,
 
r
i
g
h
t
C
h
i
l
d
I
d
]
,


 
 
 
 
 
 
}
;


 
 
 
 
 
 
n
o
d
e
s
[
l
e
f
t
C
h
i
l
d
I
d
]
.
p
a
r
e
n
t
 
=
 
n
e
w
R
o
o
t
I
d
;


 
 
 
 
 
 
n
o
d
e
s
[
r
i
g
h
t
C
h
i
l
d
I
d
]
.
p
a
r
e
n
t
 
=
 
n
e
w
R
o
o
t
I
d
;


 
 
 
 
 
 
r
o
o
t
I
d
 
=
 
n
e
w
R
o
o
t
I
d
;


 
 
 
 
 
 
s
n
a
p
(
8
,
 
`
R
o
o
t
 
o
v
e
r
f
l
o
w
e
d
,
 
c
r
e
a
t
e
 
n
e
w
 
r
o
o
t
 
h
o
l
d
i
n
g
 
r
o
u
t
i
n
g
 
k
e
y
 
$
{
p
r
o
m
o
t
e
K
e
y
}
.
`
,
 
n
e
w
R
o
o
t
I
d
,
 
"
a
c
t
i
v
e
"
,
 
"
n
e
w
R
o
o
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


 
 
 
 
c
o
n
s
t
 
p
a
r
e
n
t
I
d
 
=
 
n
o
d
e
s
[
t
a
r
g
e
t
I
d
]
.
p
a
r
e
n
t
!
;


 
 
 
 
i
n
s
e
r
t
I
n
t
o
N
o
d
e
(
n
o
d
e
s
[
p
a
r
e
n
t
I
d
]
,
 
p
r
o
m
o
t
e
K
e
y
,
 
l
e
f
t
C
h
i
l
d
I
d
,
 
r
i
g
h
t
C
h
i
l
d
I
d
)
;


 
 
 
 
n
o
d
e
s
[
r
i
g
h
t
C
h
i
l
d
I
d
]
.
p
a
r
e
n
t
 
=
 
p
a
r
e
n
t
I
d
;


 
 
 
 
s
n
a
p
(
7
,
 
`
P
r
o
m
o
t
e
 
$
{
p
r
o
m
o
t
e
K
e
y
}
 
i
n
t
o
 
p
a
r
e
n
t
.
 
P
a
r
e
n
t
 
n
o
w
 
h
a
s
 
k
e
y
s
 
[
$
{
n
o
d
e
s
[
p
a
r
e
n
t
I
d
]
.
k
e
y
s
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
]
.
`
,
 
p
a
r
e
n
t
I
d
,
 
"
a
c
t
i
v
e
"
,
 
"
p
r
o
m
o
t
e
"
)
;


 
 
 
 
i
f
 
(
n
o
d
e
s
[
p
a
r
e
n
t
I
d
]
.
k
e
y
s
.
l
e
n
g
t
h
 
>
 
M
A
X
_
K
E
Y
S
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
{
 
p
r
o
m
o
t
e
K
e
y
:
 
p
k
,
 
r
i
g
h
t
I
d
:
 
r
i
d
 
}
 
=
 
s
p
l
i
t
I
n
t
e
r
n
a
l
(
p
a
r
e
n
t
I
d
)
;


 
 
 
 
 
 
s
n
a
p
(
6
,
 
`
I
n
t
e
r
n
a
l
 
o
v
e
r
f
l
o
w
,
 
s
p
l
i
t
.
 
N
e
w
 
i
n
t
e
r
n
a
l
 
s
i
b
l
i
n
g
 
h
o
l
d
s
 
k
e
y
s
 
[
$
{
n
o
d
e
s
[
r
i
d
]
.
k
e
y
s
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
]
.
 
P
r
o
m
o
t
e
 
$
{
p
k
}
.
`
,
 
r
i
d
,
 
"
s
p
l
i
t
"
)
;


 
 
 
 
 
 
i
n
s
e
r
t
W
i
t
h
F
i
x
u
p
(
p
a
r
e
n
t
I
d
,
 
p
k
,
 
p
a
r
e
n
t
I
d
,
 
r
i
d
)
;


 
 
 
 
}


 
 
}




 
 
s
n
a
p
(
0
,
 
`
E
m
p
t
y
 
B
+
 
t
r
e
e
 
(
o
r
d
e
r
 
M
 
=
 
$
{
M
}
,
 
m
a
x
 
$
{
M
A
X
_
K
E
Y
S
}
 
k
e
y
s
 
p
e
r
 
n
o
d
e
)
.
`
)
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
 
k
e
y
 
o
f
 
k
e
y
s
)
 
{


 
 
 
 
i
f
 
(
!
r
o
o
t
I
d
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
l
e
a
f
I
d
 
=
 
m
k
I
d
(
)
;


 
 
 
 
 
 
n
o
d
e
s
[
l
e
a
f
I
d
]
 
=
 
{
 
i
d
:
 
l
e
a
f
I
d
,
 
i
s
L
e
a
f
:
 
t
r
u
e
,
 
k
e
y
s
:
 
[
k
e
y
]
,
 
c
h
i
l
d
r
e
n
:
 
[
]
 
}
;


 
 
 
 
 
 
r
o
o
t
I
d
 
=
 
l
e
a
f
I
d
;


 
 
 
 
 
 
s
n
a
p
(
2
,
 
`
I
n
s
e
r
t
 
$
{
k
e
y
}
 
a
s
 
t
h
e
 
o
n
l
y
 
k
e
y
 
i
n
 
t
h
e
 
r
o
o
t
 
l
e
a
f
.
`
,
 
l
e
a
f
I
d
,
 
"
a
c
t
i
v
e
"
,
 
"
i
n
s
e
r
t
"
)
;


 
 
 
 
 
 
c
o
n
t
i
n
u
e
;


 
 
 
 
}


 
 
 
 
s
n
a
p
(
2
,
 
`
I
n
s
e
r
t
 
$
{
k
e
y
}
:
 
d
e
s
c
e
n
d
 
f
r
o
m
 
r
o
o
t
 
t
o
 
f
i
n
d
 
t
a
r
g
e
t
 
l
e
a
f
.
`
,
 
r
o
o
t
I
d
,
 
"
a
c
t
i
v
e
"
)
;


 
 
 
 
c
o
n
s
t
 
l
e
a
f
I
d
 
=
 
d
e
s
c
e
n
d
T
o
L
e
a
f
(
k
e
y
)
;


 
 
 
 
i
f
 
(
n
o
d
e
s
[
l
e
a
f
I
d
]
.
k
e
y
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
k
e
y
)
)
 
{


 
 
 
 
 
 
s
n
a
p
(
3
,
 
`
K
e
y
 
$
{
k
e
y
}
 
a
l
r
e
a
d
y
 
i
n
 
l
e
a
f
,
 
d
u
p
l
i
c
a
t
e
,
 
s
k
i
p
p
i
n
g
.
`
,
 
l
e
a
f
I
d
,
 
"
c
o
m
p
a
r
e
"
)
;


 
 
 
 
 
 
c
o
n
t
i
n
u
e
;


 
 
 
 
}


 
 
 
 
i
n
s
e
r
t
I
n
t
o
N
o
d
e
(
n
o
d
e
s
[
l
e
a
f
I
d
]
,
 
k
e
y
)
;


 
 
 
 
s
n
a
p
(
3
,
 
`
I
n
s
e
r
t
e
d
 
$
{
k
e
y
}
 
i
n
t
o
 
l
e
a
f
.
 
L
e
a
f
 
k
e
y
s
:
 
[
$
{
n
o
d
e
s
[
l
e
a
f
I
d
]
.
k
e
y
s
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
]
.
`
,
 
l
e
a
f
I
d
,
 
"
a
c
t
i
v
e
"
,
 
"
i
n
s
e
r
t
"
)
;


 
 
 
 
i
f
 
(
n
o
d
e
s
[
l
e
a
f
I
d
]
.
k
e
y
s
.
l
e
n
g
t
h
 
>
 
M
A
X
_
K
E
Y
S
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
{
 
p
r
o
m
o
t
e
K
e
y
,
 
r
i
g
h
t
I
d
 
}
 
=
 
s
p
l
i
t
L
e
a
f
(
l
e
a
f
I
d
)
;


 
 
 
 
 
 
s
n
a
p
(


 
 
 
 
 
 
 
 
5
,


 
 
 
 
 
 
 
 
`
L
e
a
f
 
o
v
e
r
f
l
o
w
e
d
 
(
$
{
M
A
X
_
K
E
Y
S
 
+
 
1
}
 
>
 
$
{
M
A
X
_
K
E
Y
S
}
)
.
 
S
p
l
i
t
:
 
l
e
f
t
 
=
 
[
$
{
n
o
d
e
s
[
l
e
a
f
I
d
]
.
k
e
y
s
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
]
,
 
r
i
g
h
t
 
=
 
[
$
{
n
o
d
e
s
[
r
i
g
h
t
I
d
]
.
k
e
y
s
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
]
.
 
R
e
l
i
n
k
.
`
,


 
 
 
 
 
 
 
 
r
i
g
h
t
I
d
,


 
 
 
 
 
 
 
 
"
s
p
l
i
t
"
,


 
 
 
 
 
 
)
;


 
 
 
 
 
 
i
n
s
e
r
t
W
i
t
h
F
i
x
u
p
(
l
e
a
f
I
d
,
 
p
r
o
m
o
t
e
K
e
y
,
 
l
e
a
f
I
d
,
 
r
i
g
h
t
I
d
)
;


 
 
 
 
}


 
 
}


 
 
s
n
a
p
(
0
,
 
`
D
o
n
e
.
 
$
{
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
n
o
d
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
}
 
n
o
d
e
s
 
t
o
t
a
l
.
 
T
r
y
 
t
h
e
 
r
a
n
g
e
-
s
c
a
n
 
m
o
d
e
 
t
o
 
s
e
e
 
t
h
e
 
l
e
a
f
 
c
h
a
i
n
 
i
n
 
a
c
t
i
o
n
.
`
)
;


 
 
r
e
t
u
r
n
 
f
r
a
m
e
s
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
 
b
u
i
l
d
R
a
n
g
e
S
c
a
n
F
r
a
m
e
s
(
k
e
y
s
:
 
n
u
m
b
e
r
[
]
,
 
l
o
:
 
n
u
m
b
e
r
,
 
h
i
:
 
n
u
m
b
e
r
)
:
 
B
P
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
i
n
s
e
r
t
H
i
s
t
o
r
y
 
=
 
b
u
i
l
d
I
n
s
e
r
t
F
r
a
m
e
s
(
k
e
y
s
)
;


 
 
c
o
n
s
t
 
f
i
n
a
l
N
o
d
e
s
 
=
 
i
n
s
e
r
t
H
i
s
t
o
r
y
[
i
n
s
e
r
t
H
i
s
t
o
r
y
.
l
e
n
g
t
h
 
-
 
1
]
.
n
o
d
e
s
;


 
 
c
o
n
s
t
 
f
i
n
a
l
R
o
o
t
 
=
 
i
n
s
e
r
t
H
i
s
t
o
r
y
[
i
n
s
e
r
t
H
i
s
t
o
r
y
.
l
e
n
g
t
h
 
-
 
1
]
.
r
o
o
t
I
d
;


 
 
c
o
n
s
t
 
o
u
t
:
 
B
P
F
r
a
m
e
[
]
 
=
 
[
]
;




 
 
c
o
n
s
t
 
c
l
o
n
e
C
u
r
r
 
=
 
(
h
i
g
h
l
i
g
h
t
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
 
B
P
N
o
d
e
[
"
h
i
g
h
l
i
g
h
t
"
]
>
)
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
 
B
P
N
o
d
e
>
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
c
 
=
 
c
l
o
n
e
N
o
d
e
s
(
f
i
n
a
l
N
o
d
e
s
)
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
 
i
d
 
i
n
 
h
i
g
h
l
i
g
h
t
s
)
 
i
f
 
(
c
[
i
d
]
)
 
c
[
i
d
]
.
h
i
g
h
l
i
g
h
t
 
=
 
h
i
g
h
l
i
g
h
t
s
[
i
d
]
;


 
 
 
 
r
e
t
u
r
n
 
c
;


 
 
}
;




 
 
c
o
n
s
t
 
c
o
l
l
e
c
t
e
d
:
 
n
u
m
b
e
r
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
s
c
a
n
P
a
t
h
:
 
s
t
r
i
n
g
[
]
 
=
 
[
]
;




 
 
c
o
n
s
t
 
p
u
s
h
 
=
 
(


 
 
 
 
l
i
n
e
:
 
n
u
m
b
e
r
,


 
 
 
 
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
,


 
 
 
 
h
i
g
h
l
i
g
h
t
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
 
B
P
N
o
d
e
[
"
h
i
g
h
l
i
g
h
t
"
]
>
 
=
 
{
}
,


 
 
 
 
f
l
a
s
h
K
e
y
?
:
 
s
t
r
i
n
g
,


 
 
)
 
=
>
 
{


 
 
 
 
o
u
t
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
l
o
,
 
h
i
,
 
f
o
u
n
d
:
 
c
o
l
l
e
c
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
 
s
c
a
n
n
e
d
:
 
s
c
a
n
P
a
t
h
.
l
e
n
g
t
h
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
,


 
 
 
 
 
 
n
o
d
e
s
:
 
c
l
o
n
e
C
u
r
r
(
h
i
g
h
l
i
g
h
t
s
)
,


 
 
 
 
 
 
r
o
o
t
I
d
:
 
f
i
n
a
l
R
o
o
t
,


 
 
 
 
 
 
s
c
a
n
P
a
t
h
:
 
[
.
.
.
s
c
a
n
P
a
t
h
]
,


 
 
 
 
 
 
s
c
a
n
R
e
s
u
l
t
:
 
[
.
.
.
c
o
l
l
e
c
t
e
d
]
,


 
 
 
 
 
 
f
l
a
s
h
K
e
y
,


 
 
 
 
}
)
;


 
 
}
;




 
 
i
f
 
(
!
f
i
n
a
l
R
o
o
t
)
 
{


 
 
 
 
p
u
s
h
(
0
,
 
`
T
r
e
e
 
i
s
 
e
m
p
t
y
.
`
)
;


 
 
 
 
r
e
t
u
r
n
 
o
u
t
;


 
 
}




 
 
p
u
s
h
(
0
,
 
`
B
u
i
l
t
 
t
r
e
e
 
f
r
o
m
 
[
$
{
k
e
y
s
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
]
.
 
R
a
n
g
e
 
s
c
a
n
 
[
$
{
l
o
}
,
 
$
{
h
i
}
]
 
s
t
a
r
t
s
 
a
t
 
r
o
o
t
.
`
,
 
{
 
[
f
i
n
a
l
R
o
o
t
]
:
 
"
a
c
t
i
v
e
"
 
}
)
;




 
 
l
e
t
 
c
u
r
:
 
s
t
r
i
n
g
 
=
 
f
i
n
a
l
R
o
o
t
;


 
 
w
h
i
l
e
 
(
!
f
i
n
a
l
N
o
d
e
s
[
c
u
r
]
.
i
s
L
e
a
f
)
 
{


 
 
 
 
c
o
n
s
t
 
k
s
 
=
 
f
i
n
a
l
N
o
d
e
s
[
c
u
r
]
.
k
e
y
s
;


 
 
 
 
l
e
t
 
i
 
=
 
0
;


 
 
 
 
w
h
i
l
e
 
(
i
 
<
 
k
s
.
l
e
n
g
t
h
 
&
&
 
l
o
 
>
=
 
k
s
[
i
]
)
 
i
+
+
;


 
 
 
 
p
u
s
h
(
2
,
 
`
A
t
 
i
n
t
e
r
n
a
l
 
n
o
d
e
 
[
$
{
k
s
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
]
.
 
C
h
i
l
d
[
$
{
i
}
]
 
(
l
o
=
$
{
l
o
}
)
.
`
,
 
{
 
[
c
u
r
]
:
 
"
c
o
m
p
a
r
e
"
 
}
)
;


 
 
 
 
c
u
r
 
=
 
f
i
n
a
l
N
o
d
e
s
[
c
u
r
]
.
c
h
i
l
d
r
e
n
[
i
]
;


 
 
}




 
 
l
e
t
 
l
e
a
f
I
d
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
 
=
 
c
u
r
;


 
 
w
h
i
l
e
 
(
l
e
a
f
I
d
)
 
{


 
 
 
 
s
c
a
n
P
a
t
h
.
p
u
s
h
(
l
e
a
f
I
d
)
;


 
 
 
 
c
o
n
s
t
 
l
e
a
f
K
e
y
s
 
=
 
f
i
n
a
l
N
o
d
e
s
[
l
e
a
f
I
d
]
.
k
e
y
s
;


 
 
 
 
p
u
s
h
(
3
,
 
`
A
r
r
i
v
e
d
 
a
t
 
l
e
a
f
 
[
$
{
l
e
a
f
K
e
y
s
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
]
.
 
C
o
l
l
e
c
t
 
k
e
y
s
 
i
n
 
[
$
{
l
o
}
,
 
$
{
h
i
}
]
.
`
,
 
{
 
[
l
e
a
f
I
d
]
:
 
"
s
c
a
n
"
 
}
)
;


 
 
 
 
l
e
t
 
f
o
u
n
d
A
n
y
 
=
 
f
a
l
s
e
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
 
k
 
o
f
 
l
e
a
f
K
e
y
s
)
 
{


 
 
 
 
 
 
i
f
 
(
k
 
>
=
 
l
o
 
&
&
 
k
 
<
=
 
h
i
)
 
{


 
 
 
 
 
 
 
 
c
o
l
l
e
c
t
e
d
.
p
u
s
h
(
k
)
;


 
 
 
 
 
 
 
 
f
o
u
n
d
A
n
y
 
=
 
t
r
u
e
;


 
 
 
 
 
 
 
 
p
u
s
h
(
5
,
 
`
$
{
k
}
 
i
s
 
i
n
 
[
$
{
l
o
}
,
 
$
{
h
i
}
]
,
 
c
o
l
l
e
c
t
.
 
R
e
s
u
l
t
:
 
[
$
{
c
o
l
l
e
c
t
e
d
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
]
.
`
,
 
{
 
[
l
e
a
f
I
d
]
:
 
"
m
a
t
c
h
"
 
}
,
 
"
r
e
s
u
l
t
"
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
l
a
s
t
 
=
 
l
e
a
f
K
e
y
s
[
l
e
a
f
K
e
y
s
.
l
e
n
g
t
h
 
-
 
1
]
;


 
 
 
 
i
f
 
(
l
a
s
t
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
l
a
s
t
 
>
=
 
h
i
)
 
{


 
 
 
 
 
 
p
u
s
h
(
7
,
 
`
L
a
s
t
 
k
e
y
 
(
$
{
l
a
s
t
}
)
 
≥
 
h
i
 
(
$
{
h
i
}
)
,
 
s
t
o
p
.
 
$
{
f
o
u
n
d
A
n
y
 
?
 
"
"
 
:
 
"
(
N
o
 
m
a
t
c
h
e
s
 
i
n
 
t
h
i
s
 
l
e
a
f
.
)
"
}
`
,
 
{
 
[
l
e
a
f
I
d
]
:
 
"
m
a
t
c
h
"
 
}
)
;


 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
}


 
 
 
 
i
f
 
(
!
f
i
n
a
l
N
o
d
e
s
[
l
e
a
f
I
d
]
.
n
e
x
t
)
 
{


 
 
 
 
 
 
p
u
s
h
(
7
,
 
`
E
n
d
 
o
f
 
l
e
a
f
 
c
h
a
i
n
 
r
e
a
c
h
e
d
.
 
D
o
n
e
.
`
,
 
{
 
[
l
e
a
f
I
d
]
:
 
"
m
a
t
c
h
"
 
}
)
;


 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
}


 
 
 
 
p
u
s
h
(
6
,
 
`
L
a
s
t
 
k
e
y
 
(
$
{
l
a
s
t
}
)
 
<
 
h
i
 
(
$
{
h
i
}
)
,
 
f
o
l
l
o
w
 
l
e
a
f
.
n
e
x
t
 
p
o
i
n
t
e
r
.
`
,
 
{
 
[
l
e
a
f
I
d
]
:
 
"
s
c
a
n
"
 
}
)
;


 
 
 
 
l
e
a
f
I
d
 
=
 
f
i
n
a
l
N
o
d
e
s
[
l
e
a
f
I
d
]
.
n
e
x
t
;


 
 
}


 
 
p
u
s
h
(
8
,
 
`
R
a
n
g
e
 
s
c
a
n
 
c
o
m
p
l
e
t
e
.
 
$
{
c
o
l
l
e
c
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
}
 
k
e
y
(
s
)
 
f
o
u
n
d
 
i
n
 
[
$
{
l
o
}
,
 
$
{
h
i
}
]
:
 
[
$
{
c
o
l
l
e
c
t
e
d
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
]
.
 
C
o
s
t
:
 
O
(
l
o
g
 
n
)
 
d
e
s
c
e
n
t
 
+
 
O
(
k
)
 
l
e
a
f
 
h
o
p
s
.
`
)
;


 
 
r
e
t
u
r
n
 
o
u
t
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
B
P
T
r
e
e
 
S
V
G
 
V
i
s
u
a
l
i
z
a
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
N
o
d
e
L
a
y
o
u
t
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
;
 
w
:
 
n
u
m
b
e
r
;
 
h
:
 
n
u
m
b
e
r
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
 
l
a
y
o
u
t
T
r
e
e
(


 
 
n
o
d
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
 
B
P
N
o
d
e
>
,


 
 
r
o
o
t
I
d
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
,


 
 
v
i
e
w
W
:
 
n
u
m
b
e
r
,


)
:
 
{
 
l
a
y
o
u
t
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
 
N
o
d
e
L
a
y
o
u
t
>
;
 
h
e
i
g
h
t
:
 
n
u
m
b
e
r
 
}
 
{


 
 
i
f
 
(
!
r
o
o
t
I
d
)
 
r
e
t
u
r
n
 
{
 
l
a
y
o
u
t
:
 
{
}
,
 
h
e
i
g
h
t
:
 
6
0
 
}
;


 
 
c
o
n
s
t
 
d
e
p
t
h
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
 
n
u
m
b
e
r
>
 
=
 
{
}
;


 
 
f
u
n
c
t
i
o
n
 
d
f
s
(
i
d
:
 
s
t
r
i
n
g
,
 
d
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
d
e
p
t
h
[
i
d
]
 
=
 
d
;


 
 
 
 
i
f
 
(
!
n
o
d
e
s
[
i
d
]
.
i
s
L
e
a
f
)
 
f
o
r
 
(
c
o
n
s
t
 
c
 
o
f
 
n
o
d
e
s
[
i
d
]
.
c
h
i
l
d
r
e
n
)
 
d
f
s
(
c
,
 
d
 
+
 
1
)
;


 
 
}


 
 
d
f
s
(
r
o
o
t
I
d
,
 
0
)
;


 
 
c
o
n
s
t
 
m
a
x
D
e
p
t
h
 
=
 
M
a
t
h
.
m
a
x
(
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
d
e
p
t
h
)
)
;


 
 
c
o
n
s
t
 
l
e
v
e
l
s
:
 
s
t
r
i
n
g
[
]
[
]
 
=
 
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
 
m
a
x
D
e
p
t
h
 
+
 
1
 
}
,
 
(
)
 
=
>
 
[
]
)
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
 
i
d
 
i
n
 
n
o
d
e
s
)
 
l
e
v
e
l
s
[
d
e
p
t
h
[
i
d
]
]
.
p
u
s
h
(
i
d
)
;




 
 
c
o
n
s
t
 
N
O
D
E
_
H
 
=
 
3
8
;


 
 
c
o
n
s
t
 
K
E
Y
_
W
 
=
 
2
8
;


 
 
c
o
n
s
t
 
P
A
D
D
I
N
G
_
X
 
=
 
8
;


 
 
c
o
n
s
t
 
R
O
W
_
G
A
P
 
=
 
5
6
;


 
 
c
o
n
s
t
 
l
a
y
o
u
t
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
 
N
o
d
e
L
a
y
o
u
t
>
 
=
 
{
}
;




 
 
f
o
r
 
(
l
e
t
 
d
 
=
 
0
;
 
d
 
<
=
 
m
a
x
D
e
p
t
h
;
 
d
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
w
 
=
 
l
e
v
e
l
s
[
d
]
;


 
 
 
 
r
o
w
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
(
n
o
d
e
s
[
a
]
.
k
e
y
s
[
0
]
 
?
?
 
0
)
 
-
 
(
n
o
d
e
s
[
b
]
.
k
e
y
s
[
0
]
 
?
?
 
0
)
)
;


 
 
 
 
c
o
n
s
t
 
w
i
d
t
h
s
 
=
 
r
o
w
.
m
a
p
(
(
i
d
)
 
=
>
 
M
a
t
h
.
m
a
x
(
K
E
Y
_
W
 
*
 
M
a
t
h
.
m
a
x
(
1
,
 
n
o
d
e
s
[
i
d
]
.
k
e
y
s
.
l
e
n
g
t
h
)
 
+
 
P
A
D
D
I
N
G
_
X
 
*
 
2
,
 
6
0
)
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
W
 
=
 
w
i
d
t
h
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
,
 
w
)
 
=
>
 
s
 
+
 
w
,
 
0
)
 
+
 
(
r
o
w
.
l
e
n
g
t
h
 
-
 
1
)
 
*
 
2
4
;


 
 
 
 
l
e
t
 
x
 
=
 
(
v
i
e
w
W
 
-
 
t
o
t
a
l
W
)
 
/
 
2
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
w
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
 
i
d
 
=
 
r
o
w
[
i
]
;


 
 
 
 
 
 
l
a
y
o
u
t
[
i
d
]
 
=
 
{
 
x
,
 
y
:
 
1
8
 
+
 
d
 
*
 
R
O
W
_
G
A
P
,
 
w
:
 
w
i
d
t
h
s
[
i
]
,
 
h
:
 
N
O
D
E
_
H
 
}
;


 
 
 
 
 
 
x
 
+
=
 
w
i
d
t
h
s
[
i
]
 
+
 
2
4
;


 
 
 
 
}


 
 
}


 
 
r
e
t
u
r
n
 
{
 
l
a
y
o
u
t
,
 
h
e
i
g
h
t
:
 
1
8
 
+
 
(
m
a
x
D
e
p
t
h
 
+
 
1
)
 
*
 
R
O
W
_
G
A
P
 
+
 
4
0
 
}
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
 
c
o
l
o
r
F
o
r
N
o
d
e
(
n
:
 
B
P
N
o
d
e
)
:
 
{
 
f
i
l
l
:
 
s
t
r
i
n
g
;
 
b
o
r
d
e
r
:
 
s
t
r
i
n
g
;
 
f
g
:
 
s
t
r
i
n
g
 
}
 
{


 
 
i
f
 
(
n
.
h
i
g
h
l
i
g
h
t
 
=
=
=
 
"
s
p
l
i
t
"
)
 
r
e
t
u
r
n
 
{
 
f
i
l
l
:
 
"
r
g
b
a
(
2
3
9
,
6
8
,
6
8
,
0
.
1
8
)
"
,
 
b
o
r
d
e
r
:
 
"
#
e
f
4
4
4
4
"
,
 
f
g
:
 
"
#
7
f
1
d
1
d
"
 
}
;


 
 
i
f
 
(
n
.
h
i
g
h
l
i
g
h
t
 
=
=
=
 
"
m
a
t
c
h
"
)
 
r
e
t
u
r
n
 
{
 
f
i
l
l
:
 
"
r
g
b
a
(
1
6
,
1
8
5
,
1
2
9
,
0
.
1
8
)
"
,
 
b
o
r
d
e
r
:
 
"
#
1
0
b
9
8
1
"
,
 
f
g
:
 
"
#
0
6
5
f
4
6
"
 
}
;


 
 
i
f
 
(
n
.
h
i
g
h
l
i
g
h
t
 
=
=
=
 
"
s
c
a
n
"
)
 
r
e
t
u
r
n
 
{
 
f
i
l
l
:
 
"
r
g
b
a
(
6
,
1
8
2
,
2
1
2
,
0
.
1
8
)
"
,
 
b
o
r
d
e
r
:
 
"
#
0
6
b
6
d
4
"
,
 
f
g
:
 
"
#
0
e
7
4
9
0
"
 
}
;


 
 
i
f
 
(
n
.
h
i
g
h
l
i
g
h
t
 
=
=
=
 
"
c
o
m
p
a
r
e
"
)
 
r
e
t
u
r
n
 
{
 
f
i
l
l
:
 
"
r
g
b
a
(
2
4
5
,
1
5
8
,
1
1
,
0
.
1
8
)
"
,
 
b
o
r
d
e
r
:
 
"
#
f
5
9
e
0
b
"
,
 
f
g
:
 
"
#
9
2
4
0
0
e
"
 
}
;


 
 
i
f
 
(
n
.
h
i
g
h
l
i
g
h
t
 
=
=
=
 
"
a
c
t
i
v
e
"
)
 
r
e
t
u
r
n
 
{
 
f
i
l
l
:
 
"
r
g
b
a
(
1
6
3
,
2
3
0
,
5
3
,
0
.
1
8
)
"
,
 
b
o
r
d
e
r
:
 
"
#
a
3
e
6
3
5
"
,
 
f
g
:
 
"
#
1
a
2
e
0
5
"
 
}
;


 
 
r
e
t
u
r
n
 
n
.
i
s
L
e
a
f


 
 
 
 
?
 
{
 
f
i
l
l
:
 
"
r
g
b
a
(
1
3
9
,
9
2
,
2
4
6
,
0
.
1
0
)
"
,
 
b
o
r
d
e
r
:
 
"
#
8
b
5
c
f
6
"
,
 
f
g
:
 
"
#
5
b
2
1
b
6
"
 
}


 
 
 
 
:
 
{
 
f
i
l
l
:
 
T
H
E
M
E
.
b
g
,
 
b
o
r
d
e
r
:
 
T
H
E
M
E
.
b
o
r
d
e
r
,
 
f
g
:
 
T
H
E
M
E
.
t
e
x
t
 
}
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
 
B
P
T
r
e
e
V
i
z
(
{
 
f
r
a
m
e
 
}
:
 
{
 
f
r
a
m
e
:
 
B
P
F
r
a
m
e
 
}
)
 
{


 
 
c
o
n
s
t
 
W
 
=
 
7
2
0
;


 
 
c
o
n
s
t
 
{
 
l
a
y
o
u
t
,
 
h
e
i
g
h
t
 
}
 
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
 
l
a
y
o
u
t
T
r
e
e
(
f
r
a
m
e
.
n
o
d
e
s
,
 
f
r
a
m
e
.
r
o
o
t
I
d
,
 
W
)
,


 
 
 
 
[
f
r
a
m
e
.
n
o
d
e
s
,
 
f
r
a
m
e
.
r
o
o
t
I
d
]
,


 
 
)
;


 
 
c
o
n
s
t
 
i
d
s
 
=
 
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
r
a
m
e
.
n
o
d
e
s
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
s
v
g
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
W
}
 
$
{
h
e
i
g
h
t
}
`
}
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
"
1
0
0
%
"
,
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
,
 
m
a
x
H
e
i
g
h
t
:
 
h
e
i
g
h
t
 
}
}
>


 
 
 
 
 
 
<
d
e
f
s
>


 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
b
p
-
a
r
r
o
w
"
 
v
i
e
w
B
o
x
=
"
0
 
0
 
1
0
 
1
0
"
 
r
e
f
X
=
"
9
"
 
r
e
f
Y
=
"
5
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
6
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
6
"
 
o
r
i
e
n
t
=
"
a
u
t
o
-
s
t
a
r
t
-
r
e
v
e
r
s
e
"
>


 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
1
0
,
5
 
L
0
,
1
0
 
z
"
 
f
i
l
l
=
"
#
9
4
a
3
b
8
"
 
/
>


 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
b
p
-
l
e
a
f
"
 
v
i
e
w
B
o
x
=
"
0
 
0
 
1
0
 
1
0
"
 
r
e
f
X
=
"
9
"
 
r
e
f
Y
=
"
5
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
7
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
7
"
 
o
r
i
e
n
t
=
"
a
u
t
o
-
s
t
a
r
t
-
r
e
v
e
r
s
e
"
>


 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
1
0
,
5
 
L
0
,
1
0
 
z
"
 
f
i
l
l
=
"
#
8
b
5
c
f
6
"
 
/
>


 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
<
/
d
e
f
s
>


 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
 
=
 
f
r
a
m
e
.
n
o
d
e
s
[
i
d
]
;


 
 
 
 
 
 
 
 
i
f
 
(
n
.
i
s
L
e
a
f
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
 
=
 
l
a
y
o
u
t
[
i
d
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
a
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
.
c
h
i
l
d
r
e
n
.
m
a
p
(
(
c
i
d
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
 
b
 
=
 
l
a
y
o
u
t
[
c
i
d
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
b
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
l
o
t
s
 
=
 
n
.
c
h
i
l
d
r
e
n
.
l
e
n
g
t
h
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
x
 
=
 
a
.
x
 
+
 
(
(
i
 
+
 
0
.
5
)
 
/
 
s
l
o
t
s
)
 
*
 
a
.
w
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
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
$
{
i
d
}
-
$
{
c
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
a
x
}
 
y
1
=
{
a
.
y
 
+
 
a
.
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
b
.
x
 
+
 
b
.
w
 
/
 
2
}
 
y
2
=
{
b
.
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
"
#
9
4
a
3
b
8
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
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
b
p
-
a
r
r
o
w
)
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
 
=
 
f
r
a
m
e
.
n
o
d
e
s
[
i
d
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
n
.
i
s
L
e
a
f
 
|
|
 
!
n
.
n
e
x
t
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
 
=
 
l
a
y
o
u
t
[
i
d
]
,
 
b
 
=
 
l
a
y
o
u
t
[
n
.
n
e
x
t
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
a
 
|
|
 
!
b
)
 
r
e
t
u
r
n
 
n
u
l
l
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
n
e


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
$
{
i
d
}
-
n
e
x
t
`
}


 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
a
.
x
 
+
 
a
.
w
}
 
y
1
=
{
a
.
y
 
+
 
a
.
h
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
b
.
x
}
 
y
2
=
{
b
.
y
 
+
 
b
.
h
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
"
#
8
b
5
c
f
6
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
2
}
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
4
 
3
"


 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
b
p
-
l
e
a
f
)
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
{
i
d
s
.
m
a
p
(
(
i
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
 
=
 
f
r
a
m
e
.
n
o
d
e
s
[
i
d
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
 
=
 
l
a
y
o
u
t
[
i
d
]
;


 
 
 
 
 
 
 
 
i
f
 
(
!
a
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
c
o
l
o
r
F
o
r
N
o
d
e
(
n
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
g
 
k
e
y
=
{
i
d
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
a
.
x
}
 
y
=
{
a
.
y
}
 
w
i
d
t
h
=
{
a
.
w
}
 
h
e
i
g
h
t
=
{
a
.
h
}
 
r
x
=
{
6
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
.
f
i
l
l
}
 
s
t
r
o
k
e
=
{
c
.
b
o
r
d
e
r
}
 
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
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
:
 
"
a
l
l
 
0
.
3
s
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
n
.
k
e
y
s
.
m
a
p
(
(
k
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
 
s
e
g
W
 
=
 
a
.
w
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
n
.
k
e
y
s
.
l
e
n
g
t
h
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
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
a
.
x
 
+
 
(
i
 
+
 
0
.
5
)
 
*
 
s
e
g
W
}
 
y
=
{
a
.
y
 
+
 
a
.
h
 
/
 
2
 
+
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
=
{
1
3
}
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}
 
f
i
l
l
=
{
c
.
f
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
m
o
n
o
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
n
.
k
e
y
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
 
-
1
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
e
g
W
 
=
 
a
.
w
 
/
 
M
a
t
h
.
m
a
x
(
1
,
 
n
.
k
e
y
s
.
l
e
n
g
t
h
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
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
d
$
{
i
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
a
.
x
 
+
 
(
i
 
+
 
1
)
 
*
 
s
e
g
W
}
 
y
1
=
{
a
.
y
 
+
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
a
.
x
 
+
 
(
i
 
+
 
1
)
 
*
 
s
e
g
W
}
 
y
2
=
{
a
.
y
 
+
 
a
.
h
 
-
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
c
.
b
o
r
d
e
r
}
 
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
1
}
 
o
p
a
c
i
t
y
=
{
0
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
a
.
x
 
+
 
a
.
w
 
/
 
2
}
 
y
=
{
a
.
y
 
-
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
o
n
t
S
i
z
e
=
{
9
}
 
f
o
n
t
W
e
i
g
h
t
=
{
7
0
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
}
 
f
o
n
t
F
a
m
i
l
y
=
{
T
H
E
M
E
.
h
e
a
d
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
=
"
0
.
0
6
e
m
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
.
i
s
L
e
a
f
 
?
 
"
L
E
A
F
"
 
:
 
"
I
N
T
E
R
N
A
L
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
s
v
g
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
M
o
d
e
 
=
 
"
i
n
s
e
r
t
"
 
|
 
"
r
a
n
g
e
"
;




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
m
o
d
e
,
 
s
e
t
M
o
d
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
M
o
d
e
>
(
"
i
n
s
e
r
t
"
)
;


 
 
c
o
n
s
t
 
[
k
e
y
s
S
t
r
,
 
s
e
t
K
e
y
s
S
t
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
1
0
,
 
2
0
,
 
3
0
,
 
5
,
 
1
5
,
 
2
5
,
 
3
5
,
 
1
2
,
 
1
8
,
 
2
2
,
 
2
8
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
,
 
s
e
t
L
o
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
1
5
)
;


 
 
c
o
n
s
t
 
[
h
i
,
 
s
e
t
H
i
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
2
8
)
;




 
 
c
o
n
s
t
 
p
a
r
s
e
d
K
e
y
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
 
a
r
r
 
=
 
k
e
y
s
S
t
r
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
(
s
)
 
=
>
 
N
u
m
b
e
r
(
s
.
t
r
i
m
(
)
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
(
n
)
 
=
>
 
!
N
u
m
b
e
r
.
i
s
N
a
N
(
n
)
)
;


 
 
 
 
r
e
t
u
r
n
 
a
r
r
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
 
[
1
0
,
 
2
0
,
 
3
0
,
 
5
,
 
1
5
,
 
2
5
,
 
3
5
,
 
1
2
,
 
1
8
,
 
2
2
,
 
2
8
]
 
:
 
a
r
r
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
)
;


 
 
}
,
 
[
k
e
y
s
S
t
r
]
)
;




 
 
c
o
n
s
t
 
f
r
a
m
e
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
 
m
o
d
e
 
=
=
=
 
"
i
n
s
e
r
t
"
 
?
 
b
u
i
l
d
I
n
s
e
r
t
F
r
a
m
e
s
(
p
a
r
s
e
d
K
e
y
s
)
 
:
 
b
u
i
l
d
R
a
n
g
e
S
c
a
n
F
r
a
m
e
s
(
p
a
r
s
e
d
K
e
y
s
,
 
l
o
,
 
h
i
)
,


 
 
 
 
[
m
o
d
e
,
 
p
a
r
s
e
d
K
e
y
s
,
 
l
o
,
 
h
i
]
,


 
 
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;




 
 
c
o
n
s
t
 
p
r
e
s
e
t
s
 
=
 
[


 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
l
a
s
s
i
c
 
1
1
 
k
e
y
s
"
,
 
v
a
l
u
e
:
 
"
1
0
,
 
2
0
,
 
3
0
,
 
5
,
 
1
5
,
 
2
5
,
 
3
5
,
 
1
2
,
 
1
8
,
 
2
2
,
 
2
8
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
A
s
c
e
n
d
i
n
g
 
(
c
a
s
c
a
d
e
 
s
p
l
i
t
s
)
"
,
 
v
a
l
u
e
:
 
"
1
,
 
2
,
 
3
,
 
4
,
 
5
,
 
6
,
 
7
,
 
8
,
 
9
"
 
}
,


 
 
 
 
{
 
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
e
r
s
e
"
,
 
v
a
l
u
e
:
 
"
9
,
 
8
,
 
7
,
 
6
,
 
5
,
 
4
,
 
3
,
 
2
,
 
1
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
p
a
r
s
e
"
,
 
v
a
l
u
e
:
 
"
5
,
 
5
0
,
 
1
0
0
"
 
}
,


 
 
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
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
{
m
o
d
e
 
=
=
=
 
"
i
n
s
e
r
t
"
 
?
 
"
B
+
 
T
r
e
e
,
 
I
n
s
e
r
t
 
w
i
t
h
 
S
p
l
i
t
 
(
M
 
=
 
4
)
"
 
:
 
`
B
+
 
T
r
e
e
,
 
R
a
n
g
e
 
S
c
a
n
 
[
$
{
l
o
}
,
 
$
{
h
i
}
]
`
}


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
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
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
K
e
y
s
 
(
i
n
s
e
r
t
 
i
n
 
o
r
d
e
r
)
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
k
e
y
s
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
 
=
=
=
 
"
i
n
s
e
r
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
O
r
d
e
r
 
M
 
=
 
4
.
 
E
a
c
h
 
n
o
d
e
 
h
o
l
d
s
 
u
p
 
t
o
 
3
 
k
e
y
s
;
 
o
n
 
o
v
e
r
f
l
o
w
 
i
t
 
s
p
l
i
t
s
 
a
n
d
 
p
r
o
m
o
t
e
s
 
t
h
e
 
m
i
d
d
l
e
 
k
e
y
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
T
r
e
e
 
i
s
 
b
u
i
l
t
 
f
r
o
m
 
t
h
e
s
e
 
k
e
y
s
,
 
t
h
e
n
 
a
 
r
a
n
g
e
 
s
c
a
n
 
w
a
l
k
s
 
t
h
e
 
l
e
a
f
 
c
h
a
i
n
 
t
o
 
c
o
l
l
e
c
t
 
[
l
o
,
 
h
i
]
.
"


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
p
r
e
s
e
t
s
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
)
 
=
>
 
s
e
t
K
e
y
s
S
t
r
(
v
)
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
/
 
m
o
d
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
"
i
n
s
e
r
t
"
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
M
o
d
e
(
"
i
n
s
e
r
t
"
)
}
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
s
e
m
i
b
o
l
d
"
>
I
n
s
e
r
t
 
(
w
i
t
h
 
s
p
l
i
t
)
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
"
r
a
n
g
e
"
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
M
o
d
e
(
"
r
a
n
g
e
"
)
}
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
s
e
m
i
b
o
l
d
"
>
R
a
n
g
e
 
s
c
a
n
 
(
l
e
a
f
 
c
h
a
i
n
)
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
r
a
n
g
e
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
l
o
:
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
l
o
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
L
o
(
N
u
m
b
e
r
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
1
6
 
p
x
-
2
 
p
y
-
1
 
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
 
f
o
n
t
-
m
o
n
o
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
h
i
:
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
h
i
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
H
i
(
N
u
m
b
e
r
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
1
6
 
p
x
-
2
 
p
y
-
1
 
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
 
f
o
n
t
-
m
o
n
o
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{


 
 
 
 
 
 
 
 
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l


 
 
 
 
 
 
 
 
 
 
l
i
n
e
s
=
{
m
o
d
e
 
=
=
=
 
"
i
n
s
e
r
t
"
 
?
 
P
S
E
U
D
O
_
I
N
S
E
R
T
 
:
 
P
S
E
U
D
O
_
R
A
N
G
E
}


 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{


 
 
 
 
 
 
 
 
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l


 
 
 
 
 
 
 
 
 
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}


 
 
 
 
 
 
 
 
 
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
f
l
a
s
h
K
e
y
 
?
 
[
f
r
a
m
e
.
f
l
a
s
h
K
e
y
,
 
"
f
o
u
n
d
"
]
 
:
 
[
]
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
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
 
f
l
e
x
-
c
o
l
 
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
 
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
5
0
 
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
B
P
T
r
e
e
V
i
z
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
r
a
n
g
e
"
 
&
&
 
f
r
a
m
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
r
a
n
g
e
 
s
c
a
n
 
r
e
s
u
l
t


 
 
 
 
 
 
 
 
 
 
 
 
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
o
n
t
-
m
o
n
o
 
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
e
x
t
-
l
i
m
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
l
i
m
e
-
4
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
s
c
a
n
R
e
s
u
l
t
 
&
&
 
f
r
a
m
e
.
s
c
a
n
R
e
s
u
l
t
.
l
e
n
g
t
h
 
>
 
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
`
[
$
{
f
r
a
m
e
.
s
c
a
n
R
e
s
u
l
t
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
]
`


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
(
n
o
n
e
 
y
e
t
)
"
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
 
s
p
a
c
e
-
y
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>
L
e
a
v
e
s
 
v
i
s
i
t
e
d
:
 
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
f
r
a
m
e
.
s
c
a
n
P
a
t
h
?
.
l
e
n
g
t
h
 
?
?
 
0
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
K
e
y
s
 
c
o
l
l
e
c
t
e
d
:
 
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
f
r
a
m
e
.
s
c
a
n
R
e
s
u
l
t
?
.
l
e
n
g
t
h
 
?
?
 
0
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
i
t
a
l
i
c
 
m
t
-
1
"
>
T
o
t
a
l
 
c
o
s
t
:
 
<
s
t
r
o
n
g
>
O
(
l
o
g
 
n
)
<
/
s
t
r
o
n
g
>
 
d
e
s
c
e
n
t
 
+
 
<
s
t
r
o
n
g
>
O
(
k
)
<
/
s
t
r
o
n
g
>
 
l
e
a
f
 
h
o
p
s
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


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
i
n
s
e
r
t
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
B
+
 
t
r
e
e
 
i
n
v
a
r
i
a
n
t
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
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
 
l
i
s
t
-
d
i
s
c
 
p
l
-
4
 
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
l
i
>
O
r
d
e
r
 
M
 
=
 
{
M
}
:
 
e
a
c
h
 
n
o
d
e
 
h
o
l
d
s
 
1
–
{
M
A
X
_
K
E
Y
S
}
 
k
e
y
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>
I
n
t
e
r
n
a
l
 
n
o
d
e
s
 
h
o
l
d
 
<
s
t
r
o
n
g
>
r
o
u
t
i
n
g
 
k
e
y
s
 
o
n
l
y
<
/
s
t
r
o
n
g
>
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>
A
l
l
 
<
s
t
r
o
n
g
>
d
a
t
a
 
l
i
v
e
s
 
i
n
 
l
e
a
v
e
s
<
/
s
t
r
o
n
g
>
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>
A
l
l
 
l
e
a
v
e
s
 
a
t
 
t
h
e
 
<
s
t
r
o
n
g
>
s
a
m
e
 
d
e
p
t
h
<
/
s
t
r
o
n
g
>
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
>
L
e
a
v
e
s
 
f
o
r
m
 
a
 
<
s
t
r
o
n
g
>
l
i
n
k
e
d
 
l
i
s
t
<
/
s
t
r
o
n
g
>
 
(
l
e
f
t
-
t
o
-
r
i
g
h
t
)
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
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
 
i
t
a
l
i
c
 
m
t
-
2
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
a
l
 
D
B
 
i
n
d
e
x
e
s
 
u
s
e
 
M
 
=
 
1
0
0
–
1
0
0
0
,
 
a
 
4
-
l
e
v
e
l
 
t
r
e
e
 
i
n
d
e
x
e
s
 
~
1
0
⁹
 
r
o
w
s
 
i
n
 
4
 
d
i
s
k
 
r
e
a
d
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
3
 
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


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
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
t
e
x
t
-
p
u
r
p
l
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
p
u
r
p
l
e
-
4
0
0
"
>
p
u
r
p
l
e
 
d
a
s
h
e
d
<
/
s
t
r
o
n
g
>
 
=
 
l
e
a
f
-
c
h
a
i
n
 
p
o
i
n
t
e
r
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
t
e
x
t
-
c
y
a
n
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
c
y
a
n
-
4
0
0
"
>
c
y
a
n
<
/
s
t
r
o
n
g
>
 
=
 
l
e
a
f
 
b
e
i
n
g
 
s
c
a
n
n
e
d
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
t
e
x
t
-
e
m
e
r
a
l
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
e
m
e
r
a
l
d
-
4
0
0
"
>
g
r
e
e
n
<
/
s
t
r
o
n
g
>
 
=
 
k
e
y
 
i
n
 
r
a
n
g
e
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
"
>
r
e
d
<
/
s
t
r
o
n
g
>
 
=
 
n
o
d
e
 
s
p
l
i
t
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
C
a
l
l
o
u
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
f
u
l
l
"
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}
<
/
C
a
l
l
o
u
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
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
c
a
r
d
s
 
=
 
[


 
 
 
 
{
 
t
:
 
"
W
h
a
t
 
i
s
 
a
 
B
+
 
t
r
e
e
?
"
,
 
b
:
 
"
A
 
m
u
l
t
i
-
w
a
y
 
s
e
a
r
c
h
 
t
r
e
e
 
o
f
 
o
r
d
e
r
 
M
 
w
h
e
r
e
 
e
a
c
h
 
n
o
d
e
 
h
o
l
d
s
 
u
p
 
t
o
 
M
-
1
 
k
e
y
s
 
a
n
d
 
(
f
o
r
 
i
n
t
e
r
n
a
l
 
n
o
d
e
s
)
 
u
p
 
t
o
 
M
 
c
h
i
l
d
r
e
n
.
 
K
e
y
s
 
l
i
v
e
 
O
N
L
Y
 
i
n
 
t
h
e
 
l
e
a
v
e
s
;
 
i
n
t
e
r
n
a
l
 
n
o
d
e
s
 
h
o
l
d
 
r
o
u
t
i
n
g
 
k
e
y
s
.
 
L
e
a
v
e
s
 
f
o
r
m
 
a
 
s
o
r
t
e
d
 
l
i
n
k
e
d
 
l
i
s
t
.
"
 
}
,


 
 
 
 
{
 
t
:
 
'
W
h
y
 
"
+
"
?
'
,
 
b
:
 
"
B
-
t
r
e
e
 
h
a
s
 
d
a
t
a
 
i
n
 
B
O
T
H
 
i
n
t
e
r
n
a
l
 
a
n
d
 
l
e
a
f
 
n
o
d
e
s
.
 
B
+
 
t
r
e
e
 
c
o
n
c
e
n
t
r
a
t
e
s
 
d
a
t
a
 
i
n
 
l
e
a
v
e
s
 
o
n
l
y
,
 
i
n
t
e
r
n
a
l
 
n
o
d
e
s
 
s
h
r
i
n
k
,
 
f
a
n
o
u
t
 
g
r
o
w
s
,
 
s
c
a
n
s
 
b
e
c
o
m
e
 
a
 
l
e
a
f
-
c
h
a
i
n
 
w
a
l
k
.
 
T
h
e
 
p
l
u
s
 
i
s
 
t
h
e
 
l
e
a
f
 
c
h
a
i
n
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
B
u
i
l
t
 
f
o
r
 
d
i
s
k
s
"
,
 
b
:
 
"
E
a
c
h
 
n
o
d
e
 
=
 
o
n
e
 
d
i
s
k
 
p
a
g
e
 
(
t
y
p
i
c
a
l
l
y
 
4
 
K
B
 
o
r
 
1
6
 
K
B
)
.
 
W
i
t
h
 
M
 
a
p
p
r
o
x
i
m
a
t
e
l
y
 
2
5
6
–
1
0
0
0
,
 
e
v
e
n
 
1
0
⁹
 
r
o
w
s
 
f
i
t
 
i
n
 
a
 
4
-
l
e
v
e
l
 
t
r
e
e
,
 
4
 
d
i
s
k
 
s
e
e
k
s
 
p
e
r
 
l
o
o
k
u
p
.
 
I
n
t
e
r
n
a
l
-
n
o
d
e
 
f
a
n
o
u
t
 
i
s
 
t
h
e
 
w
h
o
l
e
 
g
a
m
e
 
w
h
e
n
 
b
y
t
e
s
-
p
e
r
-
s
e
e
k
 
i
s
 
t
h
e
 
l
i
m
i
t
i
n
g
 
f
a
c
t
o
r
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
R
a
n
g
e
 
q
u
e
r
i
e
s
 
a
r
e
 
t
h
e
 
k
i
l
l
e
r
 
f
e
a
t
u
r
e
"
,
 
b
:
 
"
S
E
L
E
C
T
 
*
 
W
H
E
R
E
 
i
d
 
B
E
T
W
E
E
N
 
1
0
0
 
A
N
D
 
5
0
0
:
 
d
e
s
c
e
n
d
 
o
n
c
e
 
(
O
(
l
o
g
 
n
)
)
,
 
t
h
e
n
 
w
a
l
k
 
l
e
a
f
.
n
e
x
t
 
p
o
i
n
t
e
r
s
 
c
o
l
l
e
c
t
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
 
(
O
(
k
)
)
.
 
P
l
a
i
n
 
B
-
t
r
e
e
s
 
w
o
u
l
d
 
n
e
e
d
 
a
 
t
r
e
e
 
t
r
a
v
e
r
s
a
l
 
b
e
t
w
e
e
n
 
e
v
e
r
y
 
m
a
t
c
h
,
 
o
r
d
e
r
s
 
o
f
 
m
a
g
n
i
t
u
d
e
 
s
l
o
w
e
r
 
f
o
r
 
r
a
n
g
e
 
w
o
r
k
l
o
a
d
s
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
I
n
s
e
r
t
:
 
d
e
s
c
e
n
d
,
 
p
l
a
c
e
,
 
s
p
l
i
t
 
i
f
 
o
v
e
r
f
l
o
w
"
,
 
b
:
 
"
F
i
n
d
 
t
h
e
 
t
a
r
g
e
t
 
l
e
a
f
 
v
i
a
 
r
o
u
t
i
n
g
 
k
e
y
s
.
 
I
n
s
e
r
t
 
i
n
 
s
o
r
t
e
d
 
p
o
s
i
t
i
o
n
.
 
I
f
 
t
h
e
 
l
e
a
f
 
o
v
e
r
f
l
o
w
s
 
(
m
o
r
e
 
t
h
a
n
 
M
-
1
 
k
e
y
s
)
,
 
s
p
l
i
t
 
i
n
t
o
 
t
w
o
 
h
a
l
v
e
s
,
 
p
r
o
m
o
t
e
 
t
h
e
 
f
i
r
s
t
 
k
e
y
 
o
f
 
t
h
e
 
r
i
g
h
t
 
h
a
l
f
 
i
n
t
o
 
t
h
e
 
p
a
r
e
n
t
,
 
a
n
d
 
r
e
l
i
n
k
 
l
e
a
f
-
c
h
a
i
n
 
p
o
i
n
t
e
r
s
.
 
S
p
l
i
t
s
 
c
a
s
c
a
d
e
 
u
p
;
 
t
h
e
 
r
o
o
t
 
m
a
y
 
s
p
l
i
t
 
t
o
o
,
 
g
r
o
w
i
n
g
 
t
h
e
 
t
r
e
e
 
b
y
 
o
n
e
 
l
e
v
e
l
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
D
e
l
e
t
e
 
i
s
 
h
a
r
d
e
r
"
,
 
b
:
 
"
S
y
m
m
e
t
r
i
c
 
t
o
 
i
n
s
e
r
t
:
 
i
f
 
a
 
n
o
d
e
 
u
n
d
e
r
f
l
o
w
s
 
(
f
e
w
e
r
 
t
h
a
n
 
c
e
i
l
(
M
/
2
)
 
k
e
y
s
)
,
 
b
o
r
r
o
w
 
f
r
o
m
 
a
 
s
i
b
l
i
n
g
 
o
r
 
m
e
r
g
e
 
w
i
t
h
 
o
n
e
.
 
P
r
o
d
u
c
t
i
o
n
 
c
o
d
e
 
u
s
e
s
 
l
a
z
y
 
d
e
l
e
t
e
 
(
m
a
r
k
 
t
o
m
b
s
t
o
n
e
)
 
a
n
d
 
b
u
l
k
-
r
e
b
u
i
l
d
 
i
n
s
t
e
a
d
,
 
t
h
e
 
w
o
r
s
t
-
c
a
s
e
 
r
e
b
a
l
a
n
c
e
 
c
a
s
c
a
d
e
 
i
s
 
r
a
r
e
l
y
 
w
o
r
t
h
 
a
n
i
m
a
t
i
n
g
.
"
 
}
,


 
 
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
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
d
a
t
a
b
a
s
e
 
i
n
d
e
x
 
f
o
u
n
d
a
t
i
o
n
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
M
e
n
t
a
l
 
m
o
d
e
l
:
 
b
a
l
a
n
c
e
d
 
i
n
d
e
x
 
+
 
s
o
r
t
e
d
 
l
i
n
k
e
d
 
l
i
s
t
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
B
+
 
t
r
e
e
 
=
 
b
a
l
a
n
c
e
d
 
i
n
d
e
x
 
o
n
 
t
o
p
 
+
 
s
o
r
t
e
d
 
l
i
n
k
e
d
 
l
i
s
t
 
a
t
 
t
h
e
 
b
o
t
t
o
m
.
 
T
h
e
 
t
r
e
e
 
g
e
t
s
 
y
o
u
 
t
o


 
 
 
 
 
 
 
 
 
 
t
h
e
 
r
i
g
h
t
 
l
e
a
f
 
i
n
 
O
(
l
o
g
 
n
)
;
 
t
h
e
 
l
i
n
k
e
d
 
l
i
s
t
 
l
e
t
s
 
y
o
u
 
s
c
a
n
 
r
a
n
g
e
s
 
a
t
 
m
e
m
o
r
y
-
t
h
r
o
u
g
h
p
u
t
 
s
p
e
e
d
.


 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
 
d
a
t
a
b
a
s
e
 
i
n
d
e
x
 
y
o
u
 
h
a
v
e
 
e
v
e
r
 
q
u
e
r
i
e
d
,
 
P
o
s
t
g
r
e
s
,
 
M
y
S
Q
L
,
 
S
Q
L
i
t
e
,
 
O
r
a
c
l
e
,
 
M
o
n
g
o
D
B
,
 
i
s


 
 
 
 
 
 
 
 
 
 
s
o
m
e
 
f
l
a
v
o
r
 
o
f
 
B
+
 
t
r
e
e
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
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
3
"
>


 
 
 
 
 
 
 
 
{
c
a
r
d
s
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
l
i
m
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
l
i
m
e
-
4
0
0
 
m
b
-
2
 
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
 
u
p
p
e
r
c
a
s
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
0
{
i
 
+
 
1
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
b
-
1
.
5
"
>
{
s
.
t
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
b
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
I
t
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
B
+
 
t
r
e
e
 
o
f
 
o
r
d
e
r
 
M
 
=
 
1
0
0
.
 
H
o
w
 
m
a
n
y
 
k
e
y
s
 
(
m
a
x
)
 
c
a
n
 
y
o
u
 
i
n
d
e
x
 
i
n
 
4
 
l
e
v
e
l
s
?
"
,
 
a
:
 
"
1
0
0
^
4
 
=
 
1
0
^
8
"
 
}
,


 
 
 
 
{
 
q
:
 
"
W
h
y
 
a
r
e
 
i
n
t
e
r
n
a
l
 
n
o
d
e
s
 
s
t
r
i
p
p
e
d
 
o
f
 
d
a
t
a
 
v
a
l
u
e
s
 
i
n
 
a
 
B
+
 
t
r
e
e
 
(
v
s
 
a
 
B
-
t
r
e
e
)
?
"
,
 
a
:
 
"
H
i
g
h
e
r
 
f
a
n
o
u
t
 
→
 
s
h
a
l
l
o
w
e
r
 
t
r
e
e
 
→
 
f
e
w
e
r
 
d
i
s
k
 
s
e
e
k
s
"
 
}
,


 
 
 
 
{
 
q
:
 
"
R
a
n
g
e
 
q
u
e
r
y
 
[
1
0
,
 
5
0
]
 
o
n
 
a
 
B
+
 
t
r
e
e
 
o
f
 
1
M
 
k
e
y
s
 
w
i
t
h
 
M
=
1
0
0
.
 
E
x
p
e
c
t
e
d
 
d
i
s
k
 
s
e
e
k
s
?
"
,
 
a
:
 
"
~
3
 
(
d
e
s
c
e
n
t
)
 
+
 
a
 
f
e
w
 
l
e
a
f
 
h
o
p
s
"
 
}
,


 
 
 
 
{
 
q
:
 
"
I
n
s
e
r
t
 
s
e
q
u
e
n
c
e
 
1
.
.
1
6
 
i
n
t
o
 
a
n
 
e
m
p
t
y
 
B
+
 
t
r
e
e
 
o
f
 
o
r
d
e
r
 
4
.
 
A
f
t
e
r
 
i
n
s
e
r
t
i
n
g
 
1
6
,
 
h
o
w
 
m
a
n
y
 
s
p
l
i
t
s
 
h
a
p
p
e
n
e
d
 
i
n
 
t
o
t
a
l
?
"
,
 
a
:
 
"
M
o
r
e
 
t
h
a
n
 
o
n
e
,
 
t
r
y
 
i
t
 
i
n
 
t
h
e
 
v
i
s
u
a
l
i
z
e
r
"
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
g
,
 
s
e
t
G
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
(
s
t
r
i
n
g
 
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
p
r
o
b
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
)
)
;


 
 
c
o
n
s
t
 
[
s
,
 
s
e
t
S
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
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
)
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
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
R
e
a
s
o
n
 
o
n
 
p
a
p
e
r
,
 
t
h
e
n
 
v
e
r
i
f
y
 
i
n
 
t
h
e
 
v
i
s
u
a
l
i
z
e
r
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
p
r
o
b
s
.
m
a
p
(
(
p
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
f
o
n
t
-
b
o
l
d
 
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
r
-
2
"
>
#
{
i
 
+
 
1
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
q
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
 
g
a
p
-
2
 
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
g
[
i
]
 
?
?
 
"
"
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
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
g
]
;
 
v
[
i
]
 
=
 
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
;
 
s
e
t
G
(
v
)
;
 
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
a
n
s
w
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
p
x
-
3
 
p
y
-
1
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
 
f
o
n
t
-
m
o
n
o
 
m
i
n
-
w
-
6
0
 
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
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
s
]
;
 
v
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
(
v
)
;
 
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
p
x
-
3
 
p
y
-
1
.
5
 
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
 
f
o
n
t
-
b
o
l
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
s
t
o
n
e
-
9
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
5
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


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
[
i
]
 
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
x
s
 
f
o
n
t
-
b
o
l
d
 
p
x
-
3
 
p
y
-
1
.
5
 
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
l
i
m
e
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
l
i
m
e
-
4
0
0
/
1
0
 
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
l
i
m
e
-
2
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
l
i
m
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
a
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
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
T
h
e
 
d
i
s
k
-
p
a
g
e
 
m
a
t
h
 
(
w
h
y
 
f
a
n
o
u
t
 
d
o
m
i
n
a
t
e
s
)
<
/
S
u
b
H
e
a
d
i
n
g
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
O
n
e
 
S
S
D
 
s
e
e
k
 
i
s
 
a
p
p
r
o
x
i
m
a
t
e
l
y
 
5
0
–
1
0
0
 
µ
s
.
 
R
A
M
 
a
c
c
e
s
s
 
i
s
 
a
p
p
r
o
x
i
m
a
t
e
l
y
 
1
0
0
 
n
s
.
 
R
a
t
i
o
:
 
a
b
o
u
t


 
 
 
 
 
 
 
 
 
 
1
0
0
0
x
.
 
S
o
 
t
h
e
 
b
i
n
d
i
n
g
 
c
o
n
s
t
r
a
i
n
t
 
o
n
 
d
a
t
a
b
a
s
e
 
l
o
o
k
u
p
s
 
i
s
 
"
h
o
w
 
m
a
n
y
 
d
i
s
k
 
p
a
g
e
s
 
m
u
s
t
 
I
 
t
o
u
c
h
?
"


 
 
 
 
 
 
 
 
 
 
A
 
B
+
 
t
r
e
e
 
w
i
t
h
 
o
r
d
e
r
 
M
 
a
n
d
 
N
 
r
o
w
s
 
h
a
s
 
h
e
i
g
h
t
 
<
I
n
l
i
n
e
C
o
d
e
>
c
e
i
l
(
l
o
g
_
M
(
N
)
)
<
/
I
n
l
i
n
e
C
o
d
e
>
.
 
W
i
t
h


 
 
 
 
 
 
 
 
 
 
M
 
=
 
2
5
6
:


 
 
 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
 
 
<
t
a
b
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
h
e
a
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
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
9
5
0
/
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[
"
R
o
w
s
"
,
 
"
B
+
 
t
r
e
e
 
h
e
i
g
h
t
 
(
M
=
2
5
6
)
"
,
 
"
P
l
a
i
n
 
B
S
T
 
h
e
i
g
h
t
"
]
.
m
a
p
(
(
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
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
x
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
1
0
⁴
"
,
 
"
~
2
"
,
 
"
~
1
4
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
1
0
⁶
"
,
 
"
~
3
"
,
 
"
~
2
0
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
1
0
⁸
"
,
 
"
~
4
"
,
 
"
~
2
7
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
"
1
0
¹
⁰
"
,
 
"
~
5
"
,
 
"
~
3
3
"
]
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
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
t
r
 
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
w
h
i
t
e
/
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
p
x
-
3
 
p
y
-
2
 
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
r
[
0
]
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
p
x
-
3
 
p
y
-
2
 
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
l
i
m
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
l
i
m
e
-
4
0
0
"
>
{
r
[
1
]
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
p
x
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
r
o
s
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
r
o
s
e
-
4
0
0
"
>
{
r
[
2
]
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
<
/
t
a
b
l
e
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
t
-
3
 
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


 
 
 
 
 
 
 
 
 
 
A
 
5
-
l
e
v
e
l
 
B
+
 
t
r
e
e
 
i
s
 
e
s
s
e
n
t
i
a
l
l
y
 
u
n
i
v
e
r
s
a
l
,
 
e
v
e
n
 
v
e
r
y
 
l
a
r
g
e
 
i
n
d
e
x
e
s
 
f
i
t
 
i
n
s
i
d
e
 
5
–
6
 
l
e
v
e
l
s
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
B
-
t
r
e
e
 
v
s
 
B
+
 
t
r
e
e
,
 
w
h
e
n
 
e
a
c
h
 
w
i
n
s
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
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
 
l
i
s
t
-
d
i
s
c
 
p
l
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
2
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
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
B
-
t
r
e
e
:
<
/
s
t
r
o
n
g
>
 
d
a
t
a
 
i
n
l
i
n
e
 
a
t


 
 
 
 
 
 
 
 
 
 
 
 
i
n
t
e
r
n
a
l
 
n
o
d
e
s
 
t
o
o
.
 
R
a
n
d
o
m
 
p
o
i
n
t
-
l
o
o
k
u
p
 
c
a
n
 
f
i
n
i
s
h
 
h
i
g
h
e
r
 
i
n
 
t
h
e
 
t
r
e
e
.
 
U
s
e
d
 
i
n
 
s
o
m
e


 
 
 
 
 
 
 
 
 
 
 
 
l
e
g
a
c
y
 
N
o
S
Q
L
 
s
t
o
r
e
s
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
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
B
+
 
t
r
e
e
:
<
/
s
t
r
o
n
g
>
 
A
L
L
 
d
a
t
a
 
i
n


 
 
 
 
 
 
 
 
 
 
 
 
l
e
a
v
e
s
;
 
i
n
t
e
r
n
a
l
 
n
o
d
e
s
 
a
r
e
 
j
u
s
t
 
r
o
u
t
i
n
g
,
 
h
i
g
h
e
r
 
f
a
n
o
u
t
,
 
s
h
a
l
l
o
w
e
r
 
t
r
e
e
.
 
R
a
n
g
e
 
q
u
e
r
i
e
s


 
 
 
 
 
 
 
 
 
 
 
 
c
o
s
t
 
O
(
l
o
g
 
n
 
+
 
k
)
 
v
i
a
 
t
h
e
 
l
e
a
f
 
c
h
a
i
n
.
 
T
h
e
 
d
e
f
a
u
l
t
 
f
o
r
 
a
l
m
o
s
t
 
e
v
e
r
y
 
m
o
d
e
r
n
 
D
B
 
i
n
d
e
x
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
e
r
e
 
B
+
 
t
r
e
e
s
 
p
o
w
e
r
 
y
o
u
r
 
d
a
y
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
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
 
l
i
s
t
-
d
i
s
c
 
p
l
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
2
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
P
o
s
t
g
r
e
S
Q
L
:
<
/
s
t
r
o
n
g
>
 
d
e
f
a
u
l
t
 
i
n
d
e
x
 
i
s
 
a
 
B
+
 
t
r
e
e
 
(
p
a
g
e
 
s
i
z
e
 
8
 
K
B
)
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
M
y
S
Q
L
 
I
n
n
o
D
B
:
<
/
s
t
r
o
n
g
>
 
c
l
u
s
t
e
r
e
d
 
i
n
d
e
x
 
=
 
B
+
 
t
r
e
e
 
o
n
 
t
h
e
 
p
r
i
m
a
r
y
 
k
e
y
;
 
s
e
c
o
n
d
a
r
y
 
i
n
d
e
x
e
s
 
p
o
i
n
t
 
b
a
c
k
 
t
o
 
t
h
e
 
p
r
i
m
a
r
y
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
S
Q
L
i
t
e
:
<
/
s
t
r
o
n
g
>
 
e
v
e
r
y
 
t
a
b
l
e
 
a
n
d
 
i
n
d
e
x
 
i
s
 
a
 
B
+
 
t
r
e
e
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
F
i
l
e
s
y
s
t
e
m
s
:
<
/
s
t
r
o
n
g
>
 
N
T
F
S
,
 
e
x
t
4
,
 
A
P
F
S
,
 
X
F
S
,
 
a
l
l
 
u
s
e
 
B
+
 
t
r
e
e
 
v
a
r
i
a
n
t
s
 
f
o
r
 
d
i
r
e
c
t
o
r
y
 
l
o
o
k
u
p
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
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
M
o
n
g
o
D
B
:
<
/
s
t
r
o
n
g
>
 
W
i
r
e
d
T
i
g
e
r
 
s
t
o
r
a
g
e
 
e
n
g
i
n
e
 
u
s
e
s
 
B
+
 
t
r
e
e
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
T
h
e
 
L
S
M
-
t
r
e
e
 
a
l
t
e
r
n
a
t
i
v
e
 
(
w
r
i
t
e
-
h
e
a
v
y
 
w
o
r
k
l
o
a
d
s
)
<
/
S
u
b
H
e
a
d
i
n
g
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


 
 
 
 
 
 
 
 
 
 
B
+
 
t
r
e
e
s
 
u
p
d
a
t
e
 
i
n
 
p
l
a
c
e
,
 
e
v
e
r
y
 
w
r
i
t
e
 
i
s
 
p
o
t
e
n
t
i
a
l
l
y
 
a
 
r
a
n
d
o
m
 
w
r
i
t
e
.
 
L
o
g
-
S
t
r
u
c
t
u
r
e
d
 
M
e
r
g
e


 
 
 
 
 
 
 
 
 
 
t
r
e
e
s
 
(
L
S
M
)
 
b
u
f
f
e
r
 
w
r
i
t
e
s
 
i
n
 
a
 
m
e
m
t
a
b
l
e
,
 
p
e
r
i
o
d
i
c
a
l
l
y
 
f
l
u
s
h
 
s
o
r
t
e
d
 
r
u
n
s
 
t
o
 
d
i
s
k
,
 
a
n
d
 
m
e
r
g
e


 
 
 
 
 
 
 
 
 
 
t
h
e
m
 
i
n
 
t
h
e
 
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
.
 
W
r
i
t
e
s
 
b
e
c
o
m
e
 
s
e
q
u
e
n
t
i
a
l
 
(
g
r
e
a
t
 
f
o
r
 
S
S
D
s
)
,
 
r
e
a
d
s
 
a
r
e
 
s
l
o
w
e
r
 
(
m
u
s
t


 
 
 
 
 
 
 
 
 
 
c
h
e
c
k
 
m
u
l
t
i
p
l
e
 
l
e
v
e
l
s
)
.
 
U
s
e
d
 
i
n
 
R
o
c
k
s
D
B
,
 
L
e
v
e
l
D
B
,
 
C
a
s
s
a
n
d
r
a
,
 
H
B
a
s
e
,
 
S
c
y
l
l
a
D
B
.
 
T
h
e
 
B
+
 
t
r
e
e


 
 
 
 
 
 
 
 
 
 
v
s
 
L
S
M
 
t
r
a
d
e
o
f
f
 
i
s
 
o
n
e
 
o
f
 
t
h
e
 
b
i
g
g
e
s
t
 
d
e
s
i
g
n
 
d
e
c
i
s
i
o
n
s
 
i
n
 
m
o
d
e
r
n
 
d
a
t
a
 
s
y
s
t
e
m
s
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
R
o
o
t
 
e
x
p
o
r
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
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
 
L
3
_
B
P
l
u
s
T
r
e
e
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
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
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
y
 
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
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
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
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
n
 
a
 
B
+
 
t
r
e
e
,
 
w
h
e
r
e
 
d
o
e
s
 
t
h
e
 
a
c
t
u
a
l
 
d
a
t
a
 
(
k
e
y
→
v
a
l
u
e
 
m
a
p
p
i
n
g
)
 
l
i
v
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
I
n
 
t
h
e
 
r
o
o
t
"
,
 
"
I
n
 
i
n
t
e
r
n
a
l
 
n
o
d
e
s
"
,
 
"
I
n
 
l
e
a
f
 
n
o
d
e
s
 
o
n
l
y
"
,
 
"
I
n
 
a
 
s
e
p
a
r
a
t
e
 
h
a
s
h
 
t
a
b
l
e
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
I
n
t
e
r
n
a
l
 
n
o
d
e
s
 
h
o
l
d
 
R
O
U
T
I
N
G
 
k
e
y
s
 
o
n
l
y
,
 
t
h
e
 
d
a
t
a
 
l
i
v
e
s
 
e
x
c
l
u
s
i
v
e
l
y
 
i
n
 
t
h
e
 
l
e
a
v
e
s
.
 
T
h
i
s
 
i
s
 
t
h
e
 
d
e
f
i
n
i
n
g
 
'
p
l
u
s
'
 
t
h
a
t
 
d
i
s
t
i
n
g
u
i
s
h
e
s
 
B
+
 
f
r
o
m
 
B
-
t
r
e
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
a
t
 
i
s
 
t
h
e
 
h
e
i
g
h
t
 
o
f
 
a
 
B
+
 
t
r
e
e
 
o
f
 
o
r
d
e
r
 
M
 
=
 
1
0
0
 
i
n
d
e
x
i
n
g
 
1
0
⁸
 
r
o
w
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
~
7
"
,
 
"
~
4
"
,
 
"
~
2
6
"
,
 
"
~
1
4
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
l
o
g
₁
₀
₀
(
1
0
⁸
)
 
=
 
4
.
 
S
o
 
4
 
l
e
v
e
l
s
 
s
u
f
f
i
c
e
,
 
m
e
a
n
i
n
g
 
~
4
 
d
i
s
k
 
r
e
a
d
s
 
p
e
r
 
l
o
o
k
u
p
,
 
v
s
 
~
2
6
 
f
o
r
 
a
 
b
i
n
a
r
y
 
t
r
e
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
y
 
a
r
e
 
l
e
a
v
e
s
 
i
n
 
a
 
B
+
 
t
r
e
e
 
l
i
n
k
e
d
 
t
o
g
e
t
h
e
r
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
T
o
 
s
a
v
e
 
m
e
m
o
r
y
"
,


 
 
 
 
 
 
 
 
"
T
o
 
m
a
k
e
 
i
n
-
o
r
d
e
r
 
t
r
a
v
e
r
s
a
l
 
c
a
c
h
e
-
f
r
i
e
n
d
l
y
"
,


 
 
 
 
 
 
 
 
"
S
o
 
r
a
n
g
e
 
q
u
e
r
i
e
s
 
c
a
n
 
s
c
a
n
 
i
n
 
O
(
l
o
g
 
n
 
+
 
k
)
 
b
y
 
d
e
s
c
e
n
d
i
n
g
 
o
n
c
e
 
a
n
d
 
f
o
l
l
o
w
i
n
g
 
n
e
x
t
-
p
o
i
n
t
e
r
s
"
,


 
 
 
 
 
 
 
 
"
R
e
q
u
i
r
e
d
 
b
y
 
A
C
I
D
 
c
o
m
p
l
i
a
n
c
e
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
T
h
e
 
l
e
a
f
 
c
h
a
i
n
 
t
u
r
n
s
 
r
a
n
g
e
 
q
u
e
r
i
e
s
 
i
n
t
o
 
a
 
s
i
n
g
l
e
 
O
(
l
o
g
 
n
)
 
d
e
s
c
e
n
t
 
+
 
O
(
k
)
 
s
e
q
u
e
n
t
i
a
l
 
w
a
l
k
.
 
W
i
t
h
o
u
t
 
i
t
,
 
r
a
n
g
e
 
q
u
e
r
i
e
s
 
w
o
u
l
d
 
n
e
e
d
 
a
 
f
u
l
l
 
t
r
e
e
 
t
r
a
v
e
r
s
a
l
 
b
e
t
w
e
e
n
 
e
v
e
r
y
 
m
a
t
c
h
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
e
n
 
i
n
s
e
r
t
i
n
g
 
i
n
t
o
 
a
 
B
+
 
t
r
e
e
 
l
e
a
f
 
t
h
a
t
'
s
 
a
l
r
e
a
d
y
 
f
u
l
l
,
 
w
h
a
t
 
h
a
p
p
e
n
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
T
h
e
 
i
n
s
e
r
t
i
o
n
 
i
s
 
r
e
j
e
c
t
e
d
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
l
e
a
f
 
i
s
 
s
p
l
i
t
 
i
n
 
h
a
l
f
;
 
t
h
e
 
f
i
r
s
t
 
k
e
y
 
o
f
 
t
h
e
 
n
e
w
 
r
i
g
h
t
 
l
e
a
f
 
i
s
 
p
r
o
m
o
t
e
d
 
t
o
 
t
h
e
 
p
a
r
e
n
t
 
(
a
n
d
 
p
a
r
e
n
t
 
s
p
l
i
t
s
 
c
a
s
c
a
d
e
 
u
p
w
a
r
d
 
i
f
 
n
e
e
d
e
d
)
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
t
r
e
e
 
i
s
 
r
e
b
u
i
l
t
 
f
r
o
m
 
s
c
r
a
t
c
h
"
,


 
 
 
 
 
 
 
 
"
A
 
n
e
w
 
r
o
o
t
 
i
s
 
a
l
w
a
y
s
 
c
r
e
a
t
e
d
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
T
h
e
 
l
e
a
f
 
s
p
l
i
t
s
,
 
t
h
e
 
s
m
a
l
l
e
s
t
 
k
e
y
 
o
f
 
t
h
e
 
r
i
g
h
t
 
h
a
l
f
 
i
s
 
C
O
P
I
E
D
 
u
p
 
a
s
 
a
 
r
o
u
t
i
n
g
 
k
e
y
 
i
n
 
t
h
e
 
p
a
r
e
n
t
,
 
a
n
d
 
l
e
a
f
-
c
h
a
i
n
 
p
o
i
n
t
e
r
s
 
a
r
e
 
r
e
l
i
n
k
e
d
 
(
l
e
f
t
.
n
e
x
t
 
=
 
r
i
g
h
t
;
 
r
i
g
h
t
.
n
e
x
t
 
=
 
o
l
d
 
n
e
x
t
)
.
 
I
f
 
t
h
e
 
p
a
r
e
n
t
 
o
v
e
r
f
l
o
w
s
,
 
i
t
 
s
p
l
i
t
s
 
t
o
o
,
 
r
e
c
u
r
s
i
v
e
l
y
 
u
p
 
t
o
 
t
h
e
 
r
o
o
t
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
i
s
 
N
O
T
 
t
y
p
i
c
a
l
l
y
 
b
a
c
k
e
d
 
b
y
 
a
 
B
+
 
t
r
e
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
P
o
s
t
g
r
e
S
Q
L
 
b
t
r
e
e
 
i
n
d
e
x
"
,
 
"
M
y
S
Q
L
 
I
n
n
o
D
B
 
c
l
u
s
t
e
r
e
d
 
i
n
d
e
x
"
,
 
"
C
a
s
s
a
n
d
r
a
'
s
 
m
a
i
n
 
s
t
o
r
a
g
e
 
(
S
S
T
a
b
l
e
s
)
"
,
 
"
S
Q
L
i
t
e
 
t
a
b
l
e
s
 
a
n
d
 
i
n
d
e
x
e
s
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
C
a
s
s
a
n
d
r
a
 
(
a
n
d
 
R
o
c
k
s
D
B
,
 
L
e
v
e
l
D
B
)
 
u
s
e
s
 
L
o
g
-
S
t
r
u
c
t
u
r
e
d
 
M
e
r
g
e
 
t
r
e
e
s
,
 
n
o
t
 
B
+
 
t
r
e
e
s
,
 
o
p
t
i
m
i
z
e
d
 
f
o
r
 
w
r
i
t
e
-
h
e
a
v
y
 
w
o
r
k
l
o
a
d
s
.
 
T
h
e
 
o
t
h
e
r
 
t
h
r
e
e
 
a
r
e
 
a
l
l
 
B
+
 
t
r
e
e
s
.
"
,


 
 
 
 
}
,


 
 
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
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
B
+
 
T
r
e
e
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
3
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
8
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
C
r
i
t
i
c
a
l
,
 
e
v
e
r
y
 
d
a
t
a
b
a
s
e
 
i
n
d
e
x
 
y
o
u
'
v
e
 
e
v
e
r
 
q
u
e
r
i
e
d
 
u
s
e
s
 
o
n
e
.
 
S
y
s
t
e
m
-
d
e
s
i
g
n
 
m
u
s
t
-
k
n
o
w
.
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
G
r
a
p
h
 
R
e
p
r
e
s
e
n
t
a
t
i
o
n
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


