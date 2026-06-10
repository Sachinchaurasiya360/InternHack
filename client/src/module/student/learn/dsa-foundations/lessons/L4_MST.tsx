
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
 
C
o
d
e
2
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


i
m
p
o
r
t
 
{
 
P
r
a
c
t
i
c
e
T
a
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
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
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
 
=
 
"
g
r
a
p
h
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
 
 
P
a
r
s
e
 
w
e
i
g
h
t
e
d
 
u
n
d
i
r
e
c
t
e
d
 
e
d
g
e
s
 
 
A
-
B
:
w
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
p
a
r
s
e
W
e
i
g
h
t
e
d
(
i
n
p
u
t
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
 
i
d
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
;
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
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
 
w
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
 
}
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
t
o
k
e
n
s
 
=
 
i
n
p
u
t
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
;


 
 
i
f
 
(
t
o
k
e
n
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
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
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
 
w
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
 
=
 
[
]
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
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
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
 
t
o
k
 
o
f
 
t
o
k
e
n
s
)
 
{


 
 
 
 
c
o
n
s
t
 
m
 
=
 
t
o
k
.
m
a
t
c
h
(
/
^
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
-
(
[
A
-
Z
a
-
z
0
-
9
_
]
+
)
:
(
-
?
\
d
+
)
$
/
)
;


 
 
 
 
i
f
 
(
!
m
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


 
 
 
 
e
d
g
e
s
.
p
u
s
h
(
{
 
f
r
o
m
:
 
m
[
1
]
,
 
t
o
:
 
m
[
2
]
,
 
w
:
 
N
u
m
b
e
r
(
m
[
3
]
)
 
}
)
;


 
 
 
 
i
d
s
.
a
d
d
(
m
[
1
]
)
;


 
 
 
 
i
d
s
.
a
d
d
(
m
[
2
]
)
;


 
 
}


 
 
r
e
t
u
r
n
 
{
 
i
d
s
:
 
[
.
.
.
i
d
s
]
.
s
o
r
t
(
)
,
 
e
d
g
e
s
 
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
 
a
u
t
o
L
a
y
o
u
t
(
i
d
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
,
 
c
x
 
=
 
3
0
0
,
 
c
y
 
=
 
1
5
0
,
 
r
 
=
 
1
1
0
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
 
}
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
 
}
>
 
=
 
{
}
;


 
 
c
o
n
s
t
 
n
 
=
 
i
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
d
s
.
f
o
r
E
a
c
h
(
(
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
 
a
n
g
 
=
 
(
2
 
*
 
M
a
t
h
.
P
I
 
*
 
i
)
 
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
)
 
-
 
M
a
t
h
.
P
I
 
/
 
2
;


 
 
 
 
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
:
 
c
x
 
+
 
r
 
*
 
M
a
t
h
.
c
o
s
(
a
n
g
)
,
 
y
:
 
c
y
 
+
 
r
 
*
 
M
a
t
h
.
s
i
n
(
a
n
g
)
 
}
;


 
 
}
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
 
 
K
r
u
s
k
a
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
E
d
g
e
S
t
a
t
u
s
 
=
 
"
p
e
n
d
i
n
g
"
 
|
 
"
a
c
c
e
p
t
e
d
"
 
|
 
"
r
e
j
e
c
t
e
d
"
 
|
 
"
c
o
n
s
i
d
e
r
i
n
g
"
;


t
y
p
e
 
N
o
d
e
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
d
o
n
e
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
 
K
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
S
t
a
t
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
 
N
o
d
e
S
t
a
t
e
>
;


 
 
m
s
t
E
d
g
e
s
:
 
S
e
t
<
s
t
r
i
n
g
>
;


 
 
r
e
j
e
c
t
e
d
E
d
g
e
s
:
 
S
e
t
<
s
t
r
i
n
g
>
;


 
 
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
:
 
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
;


 
 
s
o
r
t
e
d
E
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
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
 
w
:
 
n
u
m
b
e
r
;
 
s
t
a
t
u
s
:
 
E
d
g
e
S
t
a
t
u
s
 
}
[
]
;


 
 
c
o
s
t
:
 
n
u
m
b
e
r
;


}




c
o
n
s
t
 
K
R
U
S
K
A
L
_
P
S
E
U
D
O
 
=
 
[


 
 
"
K
r
u
s
k
a
l
(
G
)
:
"
,


 
 
"
 
 
s
o
r
t
 
e
d
g
e
s
 
b
y
 
w
e
i
g
h
t
 
a
s
c
e
n
d
i
n
g
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
v
:
 
m
a
k
e
-
s
e
t
(
v
)
"
,


 
 
"
 
 
M
S
T
 
←
 
∅
"
,


 
 
"
 
 
f
o
r
 
e
a
c
h
 
e
d
g
e
 
(
u
,
 
v
,
 
w
)
 
i
n
 
s
o
r
t
e
d
 
o
r
d
e
r
:
"
,


 
 
"
 
 
 
 
i
f
 
f
i
n
d
(
u
)
 
≠
 
f
i
n
d
(
v
)
:
"
,


 
 
"
 
 
 
 
 
 
u
n
i
o
n
(
u
,
 
v
)
"
,


 
 
"
 
 
 
 
 
 
M
S
T
 
←
 
M
S
T
 
∪
 
{
(
u
,
v
)
}
"
,


 
 
"
 
 
r
e
t
u
r
n
 
M
S
T
"
,


]
;




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
K
r
u
s
k
a
l
F
r
a
m
e
s
(
i
d
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
,
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
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
 
w
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
)
:
 
K
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
 
f
:
 
K
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
 
p
a
r
e
n
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
 
o
f
 
i
d
s
)
 
p
a
r
e
n
t
[
i
d
]
 
=
 
i
d
;


 
 
c
o
n
s
t
 
f
i
n
d
 
=
 
(
x
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
=
>
 
(
p
a
r
e
n
t
[
x
]
 
=
=
=
 
x
 
?
 
x
 
:
 
(
p
a
r
e
n
t
[
x
]
 
=
 
f
i
n
d
(
p
a
r
e
n
t
[
x
]
)
)
)
;


 
 
c
o
n
s
t
 
u
n
i
o
n
 
=
 
(
a
:
 
s
t
r
i
n
g
,
 
b
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
 
c
o
n
s
t
 
r
a
 
=
 
f
i
n
d
(
a
)
,
 
r
b
 
=
 
f
i
n
d
(
b
)
;
 
i
f
 
(
r
a
 
!
=
=
 
r
b
)
 
p
a
r
e
n
t
[
r
a
]
 
=
 
r
b
;
 
}
;




 
 
c
o
n
s
t
 
s
o
r
t
e
d
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
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
 
w
:
 
n
u
m
b
e
r
;
 
s
t
a
t
u
s
:
 
E
d
g
e
S
t
a
t
u
s
 
}
[
]
 
=
 
[
.
.
.
e
d
g
e
s
]
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
 
a
.
w
 
-
 
b
.
w
)
.
m
a
p
(
(
e
)
 
=
>
 
(
{
 
.
.
.
e
,
 
s
t
a
t
u
s
:
 
"
p
e
n
d
i
n
g
"
 
a
s
 
E
d
g
e
S
t
a
t
u
s
 
}
)
)
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
S
t
a
t
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
 
N
o
d
e
S
t
a
t
e
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
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
 
[
i
d
,
 
"
d
e
f
a
u
l
t
"
]
)
)
;


 
 
c
o
n
s
t
 
m
s
t
E
d
g
e
s
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
;


 
 
c
o
n
s
t
 
r
e
j
e
c
t
e
d
E
d
g
e
s
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
;


 
 
l
e
t
 
c
o
s
t
 
=
 
0
;


 
 
l
e
t
 
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
:
 
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
 
=
 
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
l
o
n
e
 
=
 
(
p
a
t
c
h
:
 
P
a
r
t
i
a
l
<
K
F
r
a
m
e
>
)
:
 
K
F
r
a
m
e
 
=
>
 
(
{


 
 
 
 
l
i
n
e
:
 
p
a
t
c
h
.
l
i
n
e
 
?
?
 
0
,


 
 
 
 
v
a
r
s
:
 
p
a
t
c
h
.
v
a
r
s
 
?
?
 
{
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
p
a
t
c
h
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
"
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
n
o
d
e
S
t
a
t
e
s
 
}
,


 
 
 
 
m
s
t
E
d
g
e
s
:
 
n
e
w
 
S
e
t
(
m
s
t
E
d
g
e
s
)
,


 
 
 
 
r
e
j
e
c
t
e
d
E
d
g
e
s
:
 
n
e
w
 
S
e
t
(
r
e
j
e
c
t
e
d
E
d
g
e
s
)
,


 
 
 
 
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
:
 
p
a
t
c
h
.
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
 
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
 
?
 
p
a
t
c
h
.
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
 
:
 
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
,


 
 
 
 
s
o
r
t
e
d
E
d
g
e
s
:
 
s
o
r
t
e
d
.
m
a
p
(
(
e
)
 
=
>
 
(
{
 
.
.
.
e
 
}
)
)
,


 
 
 
 
c
o
s
t
,


 
 
}
)
;




 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
1
,
 
m
e
s
s
a
g
e
:
 
"
S
o
r
t
 
a
l
l
 
e
d
g
e
s
 
b
y
 
w
e
i
g
h
t
 
a
s
c
e
n
d
i
n
g
.
"
 
}
)
)
;


 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
2
,
 
m
e
s
s
a
g
e
:
 
"
M
a
k
e
-
s
e
t
:
 
e
a
c
h
 
v
e
r
t
e
x
 
i
s
 
i
t
s
 
o
w
n
 
c
o
m
p
o
n
e
n
t
.
"
 
}
)
)
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
 
s
o
r
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
 
e
 
=
 
s
o
r
t
e
d
[
i
]
;


 
 
 
 
c
o
n
s
t
 
k
 
=
 
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
;


 
 
 
 
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
 
=
 
k
;


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
4
,
 
m
e
s
s
a
g
e
:
 
`
C
o
n
s
i
d
e
r
 
e
d
g
e
 
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
 
(
w
=
$
{
e
.
w
}
)
.
`
,
 
v
a
r
s
:
 
{
 
i
:
 
i
 
+
 
1
,
 
u
:
 
e
.
f
r
o
m
,
 
v
:
 
e
.
t
o
,
 
w
:
 
e
.
w
 
}
,
 
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
:
 
k
 
}
)
)
;


 
 
 
 
c
o
n
s
t
 
r
a
 
=
 
f
i
n
d
(
e
.
f
r
o
m
)
,
 
r
b
 
=
 
f
i
n
d
(
e
.
t
o
)
;


 
 
 
 
i
f
 
(
r
a
 
!
=
=
 
r
b
)
 
{


 
 
 
 
 
 
u
n
i
o
n
(
e
.
f
r
o
m
,
 
e
.
t
o
)
;


 
 
 
 
 
 
s
o
r
t
e
d
[
i
]
.
s
t
a
t
u
s
 
=
 
"
a
c
c
e
p
t
e
d
"
;


 
 
 
 
 
 
m
s
t
E
d
g
e
s
.
a
d
d
(
k
)
;


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
[
e
.
f
r
o
m
]
 
=
 
"
d
o
n
e
"
;


 
 
 
 
 
 
n
o
d
e
S
t
a
t
e
s
[
e
.
t
o
]
 
=
 
"
d
o
n
e
"
;


 
 
 
 
 
 
c
o
s
t
 
+
=
 
e
.
w
;


 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
6
,
 
m
e
s
s
a
g
e
:
 
`
D
i
f
f
e
r
e
n
t
 
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
,
 
u
n
i
o
n
.
 
A
d
d
 
t
o
 
M
S
T
.
 
R
u
n
n
i
n
g
 
c
o
s
t
 
=
 
$
{
c
o
s
t
}
.
`
,
 
v
a
r
s
:
 
{
 
i
:
 
i
 
+
 
1
,
 
c
o
s
t
 
}
 
}
)
)
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
s
o
r
t
e
d
[
i
]
.
s
t
a
t
u
s
 
=
 
"
r
e
j
e
c
t
e
d
"
;


 
 
 
 
 
 
r
e
j
e
c
t
e
d
E
d
g
e
s
.
a
d
d
(
k
)
;


 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
5
,
 
m
e
s
s
a
g
e
:
 
`
S
a
m
e
 
c
o
m
p
o
n
e
n
t
,
 
w
o
u
l
d
 
c
r
e
a
t
e
 
c
y
c
l
e
.
 
R
e
j
e
c
t
.
`
,
 
v
a
r
s
:
 
{
 
i
:
 
i
 
+
 
1
 
}
 
}
)
)
;


 
 
 
 
}


 
 
 
 
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
 
=
 
n
u
l
l
;


 
 
}


 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
8
,
 
m
e
s
s
a
g
e
:
 
`
K
r
u
s
k
a
l
 
c
o
m
p
l
e
t
e
.
 
M
S
T
 
c
o
s
t
 
=
 
$
{
c
o
s
t
}
.
`
,
 
v
a
r
s
:
 
{
 
c
o
s
t
 
}
,
 
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
:
 
n
u
l
l
 
}
)
)
;


 
 
r
e
t
u
r
n
 
f
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
 
 
P
r
i
m
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
S
t
a
t
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
 
N
o
d
e
S
t
a
t
e
>
;


 
 
m
s
t
E
d
g
e
s
:
 
S
e
t
<
s
t
r
i
n
g
>
;


 
 
i
n
T
r
e
e
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
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
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
 
w
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


 
 
c
o
s
t
:
 
n
u
m
b
e
r
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
R
I
M
_
P
S
E
U
D
O
 
=
 
[


 
 
"
P
r
i
m
(
G
,
 
s
t
a
r
t
)
:
"
,


 
 
"
 
 
i
n
T
r
e
e
 
←
 
{
s
t
a
r
t
}
;
 
c
o
s
t
 
←
 
0
"
,


 
 
"
 
 
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
 
←
 
e
d
g
e
s
 
i
n
c
i
d
e
n
t
 
t
o
 
s
t
a
r
t
"
,


 
 
"
 
 
w
h
i
l
e
 
i
n
T
r
e
e
 
≠
 
V
:
"
,


 
 
"
 
 
 
 
p
i
c
k
 
m
i
n
-
w
e
i
g
h
t
 
e
d
g
e
 
(
u
,
 
v
)
 
w
i
t
h
 
u
 
∈
 
T
,
 
v
 
∉
 
T
"
,


 
 
"
 
 
 
 
a
d
d
 
v
 
t
o
 
i
n
T
r
e
e
;
 
c
o
s
t
 
+
=
 
w
"
,


 
 
"
 
 
 
 
a
d
d
 
v
'
s
 
e
d
g
e
s
 
t
o
 
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
,


]
;




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
P
r
i
m
F
r
a
m
e
s
(
i
d
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
,
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
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
 
w
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
,
 
s
t
a
r
t
:
 
s
t
r
i
n
g
)
:
 
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
 
f
:
 
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


 
 
i
f
 
(
!
i
d
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
s
t
a
r
t
)
)
 
{


 
 
 
 
f
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
:
 
0
,
 
v
a
r
s
:
 
{
}
,
 
m
e
s
s
a
g
e
:
 
`
S
t
a
r
t
 
'
$
{
s
t
a
r
t
}
'
 
n
o
t
 
i
n
 
g
r
a
p
h
`
,
 
n
o
d
e
S
t
a
t
e
s
:
 
{
}
,
 
m
s
t
E
d
g
e
s
:
 
n
e
w
 
S
e
t
(
)
,
 
i
n
T
r
e
e
:
 
[
]
,
 
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
:
 
[
]
,
 
c
o
s
t
:
 
0
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
f
;


 
 
}




 
 
c
o
n
s
t
 
a
d
j
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
 
w
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
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
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
 
[
i
d
,
 
[
]
]
)
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
 
e
 
o
f
 
e
d
g
e
s
)
 
{
 
a
d
j
[
e
.
f
r
o
m
]
.
p
u
s
h
(
{
 
t
o
:
 
e
.
t
o
,
 
w
:
 
e
.
w
 
}
)
;
 
a
d
j
[
e
.
t
o
]
.
p
u
s
h
(
{
 
t
o
:
 
e
.
f
r
o
m
,
 
w
:
 
e
.
w
 
}
)
;
 
}




 
 
c
o
n
s
t
 
n
o
d
e
S
t
a
t
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
 
N
o
d
e
S
t
a
t
e
>
 
=
 
O
b
j
e
c
t
.
f
r
o
m
E
n
t
r
i
e
s
(
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
 
[
i
d
,
 
"
d
e
f
a
u
l
t
"
]
)
)
;


 
 
c
o
n
s
t
 
m
s
t
E
d
g
e
s
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
;


 
 
c
o
n
s
t
 
i
n
T
r
e
e
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
[
s
t
a
r
t
]
)
;


 
 
n
o
d
e
S
t
a
t
e
s
[
s
t
a
r
t
]
 
=
 
"
d
o
n
e
"
;


 
 
l
e
t
 
c
o
s
t
 
=
 
0
;


 
 
c
o
n
s
t
 
c
a
n
d
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
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
 
w
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
 
=
 
a
d
j
[
s
t
a
r
t
]
.
m
a
p
(
(
e
)
 
=
>
 
(
{
 
f
r
o
m
:
 
s
t
a
r
t
,
 
t
o
:
 
e
.
t
o
,
 
w
:
 
e
.
w
 
}
)
)
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
 
=
 
(
p
a
t
c
h
:
 
P
a
r
t
i
a
l
<
P
F
r
a
m
e
>
)
:
 
P
F
r
a
m
e
 
=
>
 
(
{


 
 
 
 
l
i
n
e
:
 
p
a
t
c
h
.
l
i
n
e
 
?
?
 
0
,


 
 
 
 
v
a
r
s
:
 
p
a
t
c
h
.
v
a
r
s
 
?
?
 
{
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
p
a
t
c
h
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
"
,


 
 
 
 
n
o
d
e
S
t
a
t
e
s
:
 
{
 
.
.
.
n
o
d
e
S
t
a
t
e
s
 
}
,


 
 
 
 
m
s
t
E
d
g
e
s
:
 
n
e
w
 
S
e
t
(
m
s
t
E
d
g
e
s
)
,


 
 
 
 
i
n
T
r
e
e
:
 
[
.
.
.
i
n
T
r
e
e
]
,


 
 
 
 
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
:
 
[
.
.
.
c
a
n
d
s
]
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
 
a
.
w
 
-
 
b
.
w
)
,


 
 
 
 
c
o
s
t
,


 
 
 
 
f
l
a
s
h
K
e
y
:
 
p
a
t
c
h
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


 
 
}
)
;




 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
1
,
 
m
e
s
s
a
g
e
:
 
`
S
t
a
r
t
 
f
r
o
m
 
$
{
s
t
a
r
t
}
.
 
i
n
T
r
e
e
 
=
 
{
$
{
s
t
a
r
t
}
}
,
 
c
o
s
t
 
=
 
0
.
`
,
 
f
l
a
s
h
K
e
y
:
 
s
t
a
r
t
,
 
v
a
r
s
:
 
{
 
s
t
a
r
t
,
 
c
o
s
t
 
}
 
}
)
)
;


 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
2
,
 
m
e
s
s
a
g
e
:
 
`
C
o
l
l
e
c
t
 
$
{
c
a
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
 
c
a
n
d
i
d
a
t
e
 
e
d
g
e
(
s
)
 
f
r
o
m
 
$
{
s
t
a
r
t
}
.
`
,
 
v
a
r
s
:
 
{
 
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
:
 
c
a
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
 
}
)
)
;




 
 
w
h
i
l
e
 
(
i
n
T
r
e
e
.
s
i
z
e
 
<
 
i
d
s
.
l
e
n
g
t
h
)
 
{


 
 
 
 
c
a
n
d
s
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
 
a
.
w
 
-
 
b
.
w
)
;


 
 
 
 
l
e
t
 
c
h
o
s
e
n
I
d
x
 
=
 
-
1
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
 
c
a
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
 
c
 
=
 
c
a
n
d
s
[
i
]
;


 
 
 
 
 
 
c
o
n
s
t
 
i
n
U
 
=
 
i
n
T
r
e
e
.
h
a
s
(
c
.
f
r
o
m
)
,
 
i
n
V
 
=
 
i
n
T
r
e
e
.
h
a
s
(
c
.
t
o
)
;


 
 
 
 
 
 
i
f
 
(
i
n
U
 
!
=
=
 
i
n
V
)
 
{
 
c
h
o
s
e
n
I
d
x
 
=
 
i
;
 
b
r
e
a
k
;
 
}


 
 
 
 
}


 
 
 
 
i
f
 
(
c
h
o
s
e
n
I
d
x
 
=
=
=
 
-
1
)
 
{


 
 
 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
3
,
 
m
e
s
s
a
g
e
:
 
"
N
o
 
c
r
o
s
s
-
c
u
t
 
e
d
g
e
 
r
e
m
a
i
n
i
n
g
,
 
g
r
a
p
h
 
d
i
s
c
o
n
n
e
c
t
e
d
.
"
 
}
)
)
;


 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
c
h
o
s
e
n
 
=
 
c
a
n
d
s
.
s
p
l
i
c
e
(
c
h
o
s
e
n
I
d
x
,
 
1
)
[
0
]
;


 
 
 
 
c
o
n
s
t
 
n
e
w
V
 
=
 
i
n
T
r
e
e
.
h
a
s
(
c
h
o
s
e
n
.
f
r
o
m
)
 
?
 
c
h
o
s
e
n
.
t
o
 
:
 
c
h
o
s
e
n
.
f
r
o
m
;


 
 
 
 
c
o
n
s
t
 
k
 
=
 
`
$
{
c
h
o
s
e
n
.
f
r
o
m
}
-
$
{
c
h
o
s
e
n
.
t
o
}
`
;


 
 
 
 
c
o
n
s
t
 
k
R
e
v
 
=
 
`
$
{
c
h
o
s
e
n
.
t
o
}
-
$
{
c
h
o
s
e
n
.
f
r
o
m
}
`
;


 
 
 
 
m
s
t
E
d
g
e
s
.
a
d
d
(
k
)
;


 
 
 
 
m
s
t
E
d
g
e
s
.
a
d
d
(
k
R
e
v
)
;


 
 
 
 
c
o
s
t
 
+
=
 
c
h
o
s
e
n
.
w
;


 
 
 
 
i
n
T
r
e
e
.
a
d
d
(
n
e
w
V
)
;


 
 
 
 
n
o
d
e
S
t
a
t
e
s
[
n
e
w
V
]
 
=
 
"
d
o
n
e
"
;


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
4
,
 
m
e
s
s
a
g
e
:
 
`
C
h
e
a
p
e
s
t
 
c
r
o
s
s
-
e
d
g
e
:
 
$
{
c
h
o
s
e
n
.
f
r
o
m
}
-
$
{
c
h
o
s
e
n
.
t
o
}
 
(
w
=
$
{
c
h
o
s
e
n
.
w
}
)
.
 
A
d
d
 
$
{
n
e
w
V
}
 
t
o
 
t
r
e
e
.
 
C
o
s
t
 
=
 
$
{
c
o
s
t
}
.
`
,
 
f
l
a
s
h
K
e
y
:
 
n
e
w
V
,
 
v
a
r
s
:
 
{
 
n
e
w
V
e
r
t
e
x
:
 
n
e
w
V
,
 
e
d
g
e
W
:
 
c
h
o
s
e
n
.
w
,
 
c
o
s
t
 
}
 
}
)
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
 
e
 
o
f
 
a
d
j
[
n
e
w
V
]
)
 
{


 
 
 
 
 
 
i
f
 
(
!
i
n
T
r
e
e
.
h
a
s
(
e
.
t
o
)
)
 
c
a
n
d
s
.
p
u
s
h
(
{
 
f
r
o
m
:
 
n
e
w
V
,
 
t
o
:
 
e
.
t
o
,
 
w
:
 
e
.
w
 
}
)
;


 
 
 
 
}


 
 
 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
6
,
 
m
e
s
s
a
g
e
:
 
`
A
d
d
e
d
 
n
e
w
 
c
a
n
d
i
d
a
t
e
 
e
d
g
e
s
.
 
T
r
e
e
 
s
i
z
e
 
=
 
$
{
i
n
T
r
e
e
.
s
i
z
e
}
.
`
,
 
v
a
r
s
:
 
{
 
"
|
i
n
T
r
e
e
|
"
:
 
i
n
T
r
e
e
.
s
i
z
e
,
 
c
o
s
t
 
}
 
}
)
)
;


 
 
}




 
 
f
.
p
u
s
h
(
c
l
o
n
e
(
{
 
l
i
n
e
:
 
3
,
 
m
e
s
s
a
g
e
:
 
`
P
r
i
m
 
c
o
m
p
l
e
t
e
.
 
M
S
T
 
c
o
s
t
 
=
 
$
{
c
o
s
t
}
.
`
,
 
v
a
r
s
:
 
{
 
c
o
s
t
 
}
 
}
)
)
;


 
 
r
e
t
u
r
n
 
f
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
l
i
n
e
 
g
r
a
p
h
 
S
V
G
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
N
O
D
E
_
S
T
A
T
E
_
C
O
L
O
R
:
 
R
e
c
o
r
d
<
N
o
d
e
S
t
a
t
e
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


 
 
d
e
f
a
u
l
t
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
M
u
t
e
d
,


 
 
d
o
n
e
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
 
G
r
a
p
h
S
V
G
(
{


 
 
i
d
s
,


 
 
e
d
g
e
s
,


 
 
p
o
s
,


 
 
m
s
t
E
d
g
e
s
,


 
 
r
e
j
e
c
t
e
d
E
d
g
e
s
,


 
 
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
,


}
:
 
{


 
 
i
d
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
;


 
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
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
 
w
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


 
 
p
o
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
 
}
>
;


 
 
m
s
t
E
d
g
e
s
:
 
S
e
t
<
s
t
r
i
n
g
>
;


 
 
r
e
j
e
c
t
e
d
E
d
g
e
s
?
:
 
S
e
t
<
s
t
r
i
n
g
>
;


 
 
c
o
n
s
i
d
e
r
i
n
g
E
d
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
 
|
 
n
u
l
l
;


 
 
n
o
d
e
S
t
a
t
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
 
N
o
d
e
S
t
a
t
e
>
;


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
 
6
0
0
;


 
 
c
o
n
s
t
 
H
 
=
 
3
0
0
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
w
-
f
u
l
l
 
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
"
>


 
 
 
 
 
 
<
s
v
g
 
w
i
d
t
h
=
{
W
}
 
h
e
i
g
h
t
=
{
H
}
 
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
H
}
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
b
l
o
c
k
 
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
e
d
g
e
s
.
m
a
p
(
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
 
p
1
 
=
 
p
o
s
[
e
.
f
r
o
m
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
2
 
=
 
p
o
s
[
e
.
t
o
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
1
 
|
|
 
!
p
2
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
 
k
1
 
=
 
`
$
{
e
.
f
r
o
m
}
-
$
{
e
.
t
o
}
`
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
k
2
 
=
 
`
$
{
e
.
t
o
}
-
$
{
e
.
f
r
o
m
}
`
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
o
n
s
i
d
e
r
i
n
g
 
=
 
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
 
=
=
=
 
k
1
 
|
|
 
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
 
=
=
=
 
k
2
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
c
e
p
t
e
d
 
=
 
m
s
t
E
d
g
e
s
.
h
a
s
(
k
1
)
 
|
|
 
m
s
t
E
d
g
e
s
.
h
a
s
(
k
2
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
R
e
j
e
c
t
e
d
 
=
 
r
e
j
e
c
t
e
d
E
d
g
e
s
 
&
&
 
(
r
e
j
e
c
t
e
d
E
d
g
e
s
.
h
a
s
(
k
1
)
 
|
|
 
r
e
j
e
c
t
e
d
E
d
g
e
s
.
h
a
s
(
k
2
)
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
r
o
k
e
 
=
 
i
s
C
o
n
s
i
d
e
r
i
n
g
 
?
 
"
#
f
5
9
e
0
b
"
 
:
 
i
s
R
e
j
e
c
t
e
d
 
?
 
"
#
e
f
4
4
4
4
"
 
:
 
i
s
A
c
c
e
p
t
e
d
 
?
 
"
#
1
0
b
9
8
1
"
 
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
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
r
o
k
e
W
 
=
 
i
s
C
o
n
s
i
d
e
r
i
n
g
 
|
|
 
i
s
A
c
c
e
p
t
e
d
 
|
|
 
i
s
R
e
j
e
c
t
e
d
 
?
 
2
.
5
 
:
 
1
.
5
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
x
 
=
 
(
p
1
.
x
 
+
 
p
2
.
x
)
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
y
 
=
 
(
p
1
.
y
 
+
 
p
2
.
y
)
 
/
 
2
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
k
1
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
p
1
.
x
}
 
y
1
=
{
p
1
.
y
}
 
x
2
=
{
p
2
.
x
}
 
y
2
=
{
p
2
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
{
s
t
r
o
k
e
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
s
t
r
o
k
e
W
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
m
x
}
 
y
=
{
m
y
 
-
 
5
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
"
1
0
"
 
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
a
c
c
e
n
t
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
"
7
0
0
"
 
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
e
.
w
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
 
p
 
=
 
p
o
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
p
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
c
i
r
c
l
e
 
c
x
=
{
p
.
x
}
 
c
y
=
{
p
.
y
}
 
r
=
{
2
0
}
 
f
i
l
l
=
{
N
O
D
E
_
S
T
A
T
E
_
C
O
L
O
R
[
"
d
e
f
a
u
l
t
"
]
}
 
s
t
r
o
k
e
=
{
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
.
5
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
.
x
}
 
y
=
{
p
.
y
 
+
 
1
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
 
d
o
m
i
n
a
n
t
B
a
s
e
l
i
n
e
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
"
1
3
"
 
f
i
l
l
=
"
#
f
f
f
"
 
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
"
7
0
0
"
 
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
>
{
i
d
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
 
 
S
o
r
t
e
d
 
e
d
g
e
 
t
a
b
l
e
 
(
K
r
u
s
k
a
l
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




f
u
n
c
t
i
o
n
 
S
o
r
t
e
d
E
d
g
e
T
a
b
l
e
(
{
 
s
o
r
t
e
d
E
d
g
e
s
,
 
c
o
n
s
i
d
e
r
e
d
 
}
:
 
{
 
s
o
r
t
e
d
E
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
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
 
w
:
 
n
u
m
b
e
r
;
 
s
t
a
t
u
s
:
 
E
d
g
e
S
t
a
t
u
s
 
}
[
]
;
 
c
o
n
s
i
d
e
r
e
d
:
 
n
u
m
b
e
r
 
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
"
>
/
 
s
o
r
t
e
d
 
e
d
g
e
s
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
c
o
l
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
{
s
o
r
t
e
d
E
d
g
e
s
.
m
a
p
(
(
e
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
 
=
 
i
 
+
 
1
 
=
=
=
 
c
o
n
s
i
d
e
r
e
d
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
o
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
E
d
g
e
S
t
a
t
u
s
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


 
 
 
 
 
 
 
 
 
 
 
 
p
e
n
d
i
n
g
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
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
i
d
e
r
i
n
g
:
 
"
t
e
x
t
-
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
 
b
o
r
d
e
r
-
a
m
b
e
r
-
4
0
0
"
,


 
 
 
 
 
 
 
 
 
 
 
 
a
c
c
e
p
t
e
d
:
 
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
5
0
0
 
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
r
e
j
e
c
t
e
d
:
 
"
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
o
s
e
-
4
0
0
 
b
o
r
d
e
r
-
r
o
s
e
-
4
0
0
 
b
g
-
r
o
s
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
r
o
s
e
-
4
0
0
/
5
"
,


 
 
 
 
 
 
 
 
 
 
}
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
l
s
 
=
 
i
s
C
u
r
 
?
 
"
t
e
x
t
-
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
 
b
o
r
d
e
r
-
a
m
b
e
r
-
4
0
0
 
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
 
d
a
r
k
:
b
g
-
a
m
b
e
r
-
4
0
0
/
5
"
 
:
 
c
o
l
o
r
s
[
e
.
s
t
a
t
u
s
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
{
`
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
b
e
t
w
e
e
n
 
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
 
$
{
c
l
s
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
e
.
f
r
o
m
}
-
{
e
.
t
o
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
>
{
e
.
w
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
 
 
C
a
n
d
i
d
a
t
e
 
p
a
n
e
l
 
(
P
r
i
m
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




f
u
n
c
t
i
o
n
 
C
a
n
d
i
d
a
t
e
P
a
n
e
l
(
{
 
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
 
i
n
T
r
e
e
 
}
:
 
{
 
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
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
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
 
w
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
 
i
n
T
r
e
e
:
 
s
t
r
i
n
g
[
]
 
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
"
>
/
 
c
a
n
d
i
d
a
t
e
 
e
d
g
e
s
 
(
s
o
r
t
e
d
)
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
c
o
l
 
g
a
p
-
1
 
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
0
0
 
m
i
n
-
h
-
8
"
>


 
 
 
 
 
 
 
 
{
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
4
0
0
 
i
t
a
l
i
c
"
>
e
m
p
t
y
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
.
s
l
i
c
e
(
0
,
 
8
)
.
m
a
p
(
(
c
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
{
`
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
b
e
t
w
e
e
n
 
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
 
=
=
=
 
0
 
?
 
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
 
:
 
"
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
l
i
m
e
-
7
0
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
3
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
c
.
f
r
o
m
}
-
{
c
.
t
o
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
>
{
c
.
w
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
 
f
o
n
t
-
m
o
n
o
"
>
I
n
 
t
r
e
e
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
{
i
n
T
r
e
e
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
 
|
|
 
"
-
"
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
 
 
S
u
b
-
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
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
K
r
u
s
k
a
l
V
i
z
(
{
 
i
d
s
,
 
e
d
g
e
s
,
 
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
r
 
}
:
 
{


 
 
i
d
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
;


 
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
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
 
w
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


 
 
i
n
p
u
t
S
t
r
:
 
s
t
r
i
n
g
;


 
 
s
e
t
I
n
p
u
t
S
t
r
:
 
(
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
 
v
o
i
d
;


}
)
 
{


 
 
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
 
b
u
i
l
d
K
r
u
s
k
a
l
F
r
a
m
e
s
(
i
d
s
,
 
e
d
g
e
s
)
,
 
[
i
d
s
,
 
e
d
g
e
s
]
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
o
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
 
a
u
t
o
L
a
y
o
u
t
(
i
d
s
)
,
 
[
i
d
s
]
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
`
K
r
u
s
k
a
l
'
s
,
 
R
u
n
n
i
n
g
 
c
o
s
t
:
 
$
{
f
r
a
m
e
?
.
c
o
s
t
 
?
?
 
0
}
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
W
e
i
g
h
t
e
d
 
u
n
d
i
r
e
c
t
e
d
 
e
d
g
e
s
 
(
A
-
B
:
w
)
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
S
t
r
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
A
-
B
:
4
,
 
B
-
C
:
1
,
 
.
.
.
"


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
E
d
g
e
s
 
s
o
r
t
 
b
y
 
w
e
i
g
h
t
 
a
s
c
e
n
d
i
n
g
.
 
D
i
s
j
o
i
n
t
-
s
e
t
 
u
n
i
o
n
 
f
o
r
 
c
y
c
l
e
 
d
e
t
e
c
t
i
o
n
.
"


 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
m
a
l
l
"
,
 
v
a
l
u
e
:
 
"
A
-
B
:
4
,
 
A
-
C
:
3
,
 
B
-
C
:
1
,
 
B
-
D
:
2
,
 
C
-
D
:
4
,
 
C
-
E
:
5
,
 
D
-
E
:
6
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
L
i
n
e
a
r
"
,
 
v
a
l
u
e
:
 
"
A
-
B
:
1
,
 
B
-
C
:
2
,
 
C
-
D
:
3
,
 
D
-
E
:
4
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
D
e
n
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
A
-
B
:
2
,
 
A
-
C
:
3
,
 
A
-
D
:
4
,
 
B
-
C
:
1
,
 
B
-
D
:
5
,
 
C
-
D
:
6
"
 
}
,


 
 
 
 
 
 
 
 
 
 
]
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
 
{
 
i
f
 
(
p
a
r
s
e
W
e
i
g
h
t
e
d
(
v
)
)
 
s
e
t
I
n
p
u
t
S
t
r
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
/
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
K
R
U
S
K
A
L
_
P
S
E
U
D
O
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
3
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
G
r
a
p
h
S
V
G
 
i
d
s
=
{
i
d
s
}
 
e
d
g
e
s
=
{
e
d
g
e
s
}
 
p
o
s
=
{
p
o
s
}
 
m
s
t
E
d
g
e
s
=
{
f
r
a
m
e
.
m
s
t
E
d
g
e
s
}
 
r
e
j
e
c
t
e
d
E
d
g
e
s
=
{
f
r
a
m
e
.
r
e
j
e
c
t
e
d
E
d
g
e
s
}
 
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
=
{
f
r
a
m
e
.
c
o
n
s
i
d
e
r
i
n
g
E
d
g
e
}
 
n
o
d
e
S
t
a
t
e
s
=
{
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
S
t
a
t
e
s
}
 
/
>
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
 
g
a
p
-
3
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
 
e
d
g
e
s
.
l
e
n
g
t
h
 
<
=
 
1
0
 
&
&
 
<
S
o
r
t
e
d
E
d
g
e
T
a
b
l
e
 
s
o
r
t
e
d
E
d
g
e
s
=
{
f
r
a
m
e
.
s
o
r
t
e
d
E
d
g
e
s
}
 
c
o
n
s
i
d
e
r
e
d
=
{
f
r
a
m
e
.
v
a
r
s
?
.
i
 
a
s
 
n
u
m
b
e
r
 
?
?
 
0
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
 
f
l
e
x
-
w
r
a
p
 
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
[
[
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
 
"
c
o
n
s
i
d
e
r
i
n
g
"
]
,
 
[
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
 
"
i
n
 
M
S
T
"
]
,
 
[
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
 
"
r
e
j
e
c
t
e
d
 
(
c
y
c
l
e
)
"
]
]
.
m
a
p
(
(
[
c
,
 
l
]
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
b
l
o
c
k
 
w
-
2
.
5
 
h
-
2
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
s
m
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
:
 
c
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
r
u
n
 
K
r
u
s
k
a
l
'
s
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




f
u
n
c
t
i
o
n
 
P
r
i
m
V
i
z
(
{
 
i
d
s
,
 
e
d
g
e
s
,
 
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
r
,
 
s
t
a
r
t
,
 
s
e
t
S
t
a
r
t
 
}
:
 
{


 
 
i
d
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
;


 
 
e
d
g
e
s
:
 
{
 
f
r
o
m
:
 
s
t
r
i
n
g
;
 
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
 
w
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


 
 
i
n
p
u
t
S
t
r
:
 
s
t
r
i
n
g
;


 
 
s
e
t
I
n
p
u
t
S
t
r
:
 
(
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
 
v
o
i
d
;


 
 
s
t
a
r
t
:
 
s
t
r
i
n
g
;


 
 
s
e
t
S
t
a
r
t
:
 
(
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
 
v
o
i
d
;


}
)
 
{


 
 
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
 
b
u
i
l
d
P
r
i
m
F
r
a
m
e
s
(
i
d
s
,
 
e
d
g
e
s
,
 
s
t
a
r
t
)
,
 
[
i
d
s
,
 
e
d
g
e
s
,
 
s
t
a
r
t
]
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
o
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
 
a
u
t
o
L
a
y
o
u
t
(
i
d
s
)
,
 
[
i
d
s
]
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
`
P
r
i
m
'
s
 
f
r
o
m
 
$
{
s
t
a
r
t
}
,
 
R
u
n
n
i
n
g
 
c
o
s
t
:
 
$
{
f
r
a
m
e
?
.
c
o
s
t
 
?
?
 
0
}
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
 
g
a
p
-
3
 
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
-
1
 
m
i
n
-
w
-
6
4
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
W
e
i
g
h
t
e
d
 
u
n
d
i
r
e
c
t
e
d
 
e
d
g
e
s
 
(
A
-
B
:
w
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
S
t
r
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
 
{
 
i
f
 
(
p
a
r
s
e
W
e
i
g
h
t
e
d
(
v
)
)
 
s
e
t
I
n
p
u
t
S
t
r
(
v
)
;
 
}
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
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
m
a
l
l
"
,
 
v
a
l
u
e
:
 
"
A
-
B
:
4
,
 
A
-
C
:
3
,
 
B
-
C
:
1
,
 
B
-
D
:
2
,
 
C
-
D
:
4
,
 
C
-
E
:
5
,
 
D
-
E
:
6
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
D
e
n
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
A
-
B
:
2
,
 
A
-
C
:
3
,
 
A
-
D
:
4
,
 
B
-
C
:
1
,
 
B
-
D
:
5
,
 
C
-
D
:
6
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
t
a
r
t
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
s
t
a
r
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
S
t
a
r
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
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
1
0
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
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
 
<
o
p
t
i
o
n
 
k
e
y
=
{
i
d
}
 
v
a
l
u
e
=
{
i
d
}
>
{
i
d
}
<
/
o
p
t
i
o
n
>
)
}


 
 
 
 
 
 
 
 
 
 
 
 
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
P
R
I
M
_
P
S
E
U
D
O
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
"
n
e
w
V
e
r
t
e
x
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
3
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
G
r
a
p
h
S
V
G
 
i
d
s
=
{
i
d
s
}
 
e
d
g
e
s
=
{
e
d
g
e
s
}
 
p
o
s
=
{
p
o
s
}
 
m
s
t
E
d
g
e
s
=
{
f
r
a
m
e
.
m
s
t
E
d
g
e
s
}
 
n
o
d
e
S
t
a
t
e
s
=
{
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
S
t
a
t
e
s
}
 
/
>
}


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
C
a
n
d
i
d
a
t
e
P
a
n
e
l
 
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
=
{
f
r
a
m
e
.
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
}
 
i
n
T
r
e
e
=
{
f
r
a
m
e
.
i
n
T
r
e
e
}
 
/
>
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
[
[
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
 
"
i
n
 
t
r
e
e
"
]
,
 
[
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
,
 
"
o
u
t
s
i
d
e
 
t
r
e
e
"
]
]
.
m
a
p
(
(
[
c
,
 
l
]
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
b
l
o
c
k
 
w
-
2
.
5
 
h
-
2
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
s
m
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
:
 
c
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
r
u
n
 
P
r
i
m
'
s
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
"
k
r
u
s
k
a
l
"
 
|
 
"
p
r
i
m
"
>
(
"
k
r
u
s
k
a
l
"
)
;


 
 
c
o
n
s
t
 
[
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
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
A
-
B
:
4
,
 
A
-
C
:
3
,
 
B
-
C
:
1
,
 
B
-
D
:
2
,
 
C
-
D
:
4
,
 
C
-
E
:
5
,
 
D
-
E
:
6
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
t
a
r
t
,
 
s
e
t
S
t
a
r
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
A
"
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
 
p
a
r
s
e
W
e
i
g
h
t
e
d
(
i
n
p
u
t
S
t
r
)
,
 
[
i
n
p
u
t
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
 
i
d
s
 
=
 
p
a
r
s
e
d
?
.
i
d
s
 
?
?
 
[
]
;


 
 
c
o
n
s
t
 
e
d
g
e
s
 
=
 
p
a
r
s
e
d
?
.
e
d
g
e
s
 
?
?
 
[
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
f
l
e
x
 
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
k
r
u
s
k
a
l
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
k
r
u
s
k
a
l
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
x
s
"
>
K
r
u
s
k
a
l
'
s
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
p
r
i
m
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
p
r
i
m
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
x
s
"
>
P
r
i
m
'
s
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


 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
k
r
u
s
k
a
l
"


 
 
 
 
 
 
 
 
?
 
<
K
r
u
s
k
a
l
V
i
z
 
i
d
s
=
{
i
d
s
}
 
e
d
g
e
s
=
{
e
d
g
e
s
}
 
i
n
p
u
t
S
t
r
=
{
i
n
p
u
t
S
t
r
}
 
s
e
t
I
n
p
u
t
S
t
r
=
{
s
e
t
I
n
p
u
t
S
t
r
}
 
/
>


 
 
 
 
 
 
 
 
:
 
<
P
r
i
m
V
i
z
 
i
d
s
=
{
i
d
s
}
 
e
d
g
e
s
=
{
e
d
g
e
s
}
 
i
n
p
u
t
S
t
r
=
{
i
n
p
u
t
S
t
r
}
 
s
e
t
I
n
p
u
t
S
t
r
=
{
s
e
t
I
n
p
u
t
S
t
r
}
 
s
t
a
r
t
=
{
s
t
a
r
t
}
 
s
e
t
S
t
a
r
t
=
{
s
e
t
S
t
a
r
t
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
 
s
e
c
t
i
o
n
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
W
h
a
t
 
i
s
 
a
n
 
M
S
T
?
"
,
 
b
o
d
y
:
 
"
A
 
m
i
n
i
m
u
m
 
s
p
a
n
n
i
n
g
 
t
r
e
e
 
o
f
 
a
 
c
o
n
n
e
c
t
e
d
,
 
u
n
d
i
r
e
c
t
e
d
,
 
w
e
i
g
h
t
e
d
 
g
r
a
p
h
 
i
s
 
a
 
s
u
b
s
e
t
 
o
f
 
e
d
g
e
s
 
c
o
n
n
e
c
t
i
n
g
 
a
l
l
 
v
e
r
t
i
c
e
s
 
w
i
t
h
 
m
i
n
i
m
u
m
 
t
o
t
a
l
 
w
e
i
g
h
t
,
 
a
n
d
 
n
o
 
c
y
c
l
e
s
.
 
I
t
 
h
a
s
 
V
 
−
 
1
 
e
d
g
e
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
K
r
u
s
k
a
l
'
s
 
i
d
e
a
"
,
 
b
o
d
y
:
 
"
G
r
e
e
d
y
 
b
y
 
e
d
g
e
:
 
s
o
r
t
 
a
l
l
 
e
d
g
e
s
 
a
s
c
e
n
d
i
n
g
,
 
t
a
k
e
 
e
a
c
h
 
i
f
 
i
t
 
d
o
e
s
n
'
t
 
c
r
e
a
t
e
 
a
 
c
y
c
l
e
 
(
c
h
e
c
k
 
w
i
t
h
 
U
n
i
o
n
-
F
i
n
d
)
.
 
W
o
r
k
s
 
g
r
e
a
t
 
f
o
r
 
s
p
a
r
s
e
 
g
r
a
p
h
s
.
 
O
(
E
 
l
o
g
 
E
)
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
P
r
i
m
'
s
 
i
d
e
a
"
,
 
b
o
d
y
:
 
"
G
r
e
e
d
y
 
b
y
 
v
e
r
t
e
x
:
 
g
r
o
w
 
a
 
t
r
e
e
 
s
t
a
r
t
i
n
g
 
f
r
o
m
 
a
n
y
 
v
e
r
t
e
x
,
 
a
l
w
a
y
s
 
a
d
d
i
n
g
 
t
h
e
 
c
h
e
a
p
e
s
t
 
e
d
g
e
 
t
h
a
t
 
c
r
o
s
s
e
s
 
f
r
o
m
 
t
r
e
e
 
t
o
 
o
u
t
s
i
d
e
.
 
W
o
r
k
s
 
g
r
e
a
t
 
f
o
r
 
d
e
n
s
e
 
g
r
a
p
h
s
.
 
O
(
E
 
l
o
g
 
V
)
 
w
i
t
h
 
h
e
a
p
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
C
u
t
 
p
r
o
p
e
r
t
y
"
,
 
b
o
d
y
:
 
"
F
o
r
 
a
n
y
 
c
u
t
 
(
p
a
r
t
i
t
i
o
n
 
o
f
 
v
e
r
t
i
c
e
s
)
,
 
t
h
e
 
m
i
n
i
m
u
m
-
w
e
i
g
h
t
 
e
d
g
e
 
c
r
o
s
s
i
n
g
 
i
t
 
b
e
l
o
n
g
s
 
t
o
 
s
o
m
e
 
M
S
T
.
 
B
o
t
h
 
K
r
u
s
k
a
l
 
a
n
d
 
P
r
i
m
 
a
r
e
 
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
 
o
f
 
t
h
i
s
 
s
i
n
g
l
e
 
t
h
e
o
r
e
m
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
m
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
W
i
r
e
 
u
p
 
e
v
e
r
y
 
h
o
u
s
e
.
 
U
s
e
 
t
h
e
 
l
e
a
s
t
 
c
a
b
l
e
.
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


 
 
 
 
 
 
 
 
 
 
Y
o
u
 
a
r
e
 
w
i
r
i
n
g
 
u
p
 
h
o
u
s
e
s
 
i
n
 
a
 
n
e
i
g
h
b
o
r
h
o
o
d
 
w
i
t
h
 
c
a
b
l
e
.
 
E
v
e
r
y
 
h
o
u
s
e
 
m
u
s
t
 
b
e
 
c
o
n
n
e
c
t
e
d
,
 
b
u
t


 
 
 
 
 
 
 
 
 
 
t
h
e
 
t
o
t
a
l
 
c
a
b
l
e
 
l
e
n
g
t
h
 
m
u
s
t
 
b
e
 
m
i
n
i
m
u
m
.
 
T
h
a
t
 
m
i
n
i
m
u
m
 
t
r
e
e
 
i
s
 
t
h
e
 
M
S
T
.
 
K
r
u
s
k
a
l
 
p
i
c
k
s
 
t
h
e


 
 
 
 
 
 
 
 
 
 
c
h
e
a
p
e
s
t
 
w
i
r
e
s
 
g
l
o
b
a
l
l
y
;
 
P
r
i
m
 
g
r
o
w
s
 
o
u
t
w
a
r
d
 
f
r
o
m
 
o
n
e
 
h
o
u
s
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
s
e
c
t
i
o
n
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
C
a
r
d
 
k
e
y
=
{
i
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
"
>
{
s
.
t
i
t
l
e
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
o
d
y
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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
u
n
 
b
o
t
h
 
K
r
u
s
k
a
l
 
a
n
d
 
P
r
i
m
 
o
n
 
t
h
e
 
s
a
m
e
 
p
r
e
s
e
t
,
 
t
h
e
y
 
m
a
y
 
p
i
c
k
 
d
i
f
f
e
r
e
n
t
 
e
d
g
e
s
 
b
u
t
 
t
h
e
 
t
o
t
a
l
 
c
o
s
t
 
i
s
 
i
d
e
n
t
i
c
a
l
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
[


 
 
 
 
 
 
 
 
"
O
n
 
t
h
e
 
'
S
m
a
l
l
'
 
p
r
e
s
e
t
,
 
w
h
a
t
 
i
s
 
t
h
e
 
M
S
T
 
c
o
s
t
?
 
(
E
x
p
e
c
t
e
d
:
 
1
0
)
"
,


 
 
 
 
 
 
 
 
"
R
u
n
 
P
r
i
m
 
f
r
o
m
 
C
,
 
i
s
 
t
h
e
 
s
e
t
 
o
f
 
M
S
T
 
e
d
g
e
s
 
t
h
e
 
s
a
m
e
 
a
s
 
f
r
o
m
 
A
?
 
(
E
x
p
e
c
t
e
d
:
 
c
o
s
t
 
s
a
m
e
,
 
e
d
g
e
s
 
m
a
y
 
d
i
f
f
e
r
 
o
n
l
y
 
i
f
 
m
u
l
t
i
p
l
e
 
M
S
T
s
 
e
x
i
s
t
)
"
,


 
 
 
 
 
 
 
 
"
I
f
 
a
l
l
 
e
d
g
e
 
w
e
i
g
h
t
s
 
a
r
e
 
d
i
s
t
i
n
c
t
,
 
i
s
 
t
h
e
 
M
S
T
 
u
n
i
q
u
e
?
 
(
E
x
p
e
c
t
e
d
:
 
Y
e
s
)
"
,


 
 
 
 
 
 
]
.
m
a
p
(
(
q
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
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
s
t
o
n
e
-
2
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
q
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
C
a
r
d
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
K
r
u
s
k
a
l
 
v
s
 
P
r
i
m
,
 
w
h
i
c
h
 
a
n
d
 
w
h
e
n
?
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
1
.
5
 
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


 
 
 
 
 
 
 
 
 
 
<
l
i
>
S
p
a
r
s
e
 
g
r
a
p
h
 
(
E
 
≈
 
V
)
:
 
K
r
u
s
k
a
l
 
w
i
t
h
 
U
n
i
o
n
-
F
i
n
d
 
i
s
 
s
i
m
p
l
e
r
 
a
n
d
 
f
a
s
t
,
 
O
(
E
 
l
o
g
 
E
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
D
e
n
s
e
 
g
r
a
p
h
 
(
E
 
≈
 
V
²
)
:
 
P
r
i
m
 
w
i
t
h
 
a
d
j
a
c
e
n
c
y
 
m
a
t
r
i
x
 
i
s
 
O
(
V
²
)
,
 
o
f
t
e
n
 
b
e
t
t
e
r
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
B
o
t
h
 
a
r
e
 
o
p
t
i
m
a
l
.
 
P
i
c
k
 
b
a
s
e
d
 
o
n
 
c
o
d
e
 
s
i
m
p
l
i
c
i
t
y
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
M
S
T
 
i
s
 
n
o
t
 
s
h
o
r
t
e
s
t
 
p
a
t
h
s
!
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


 
 
 
 
 
 
 
 
 
 
A
 
c
o
m
m
o
n
 
m
i
s
t
a
k
e
:
 
t
h
e
 
M
S
T
 
m
i
g
h
t
 
n
o
t
 
c
o
n
t
a
i
n
 
t
h
e
 
s
h
o
r
t
e
s
t
 
p
a
t
h
 
b
e
t
w
e
e
n
 
t
w
o
 
s
p
e
c
i
f
i
c


 
 
 
 
 
 
 
 
 
 
v
e
r
t
i
c
e
s
.
 
M
S
T
 
m
i
n
i
m
i
z
e
s
 
t
o
t
a
l
 
w
e
i
g
h
t
 
a
c
r
o
s
s
 
a
l
l
 
v
e
r
t
i
c
e
s
;
 
D
i
j
k
s
t
r
a
 
m
i
n
i
m
i
z
e
s
 
d
i
s
t
a
n
c
e
 
f
r
o
m


 
 
 
 
 
 
 
 
 
 
a
 
s
i
n
g
l
e
 
s
o
u
r
c
e
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
4
_
M
S
T
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


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
p
r
a
c
t
i
c
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
P
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
C
o
d
e
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
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
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
A
 
s
p
a
n
n
i
n
g
 
t
r
e
e
 
o
f
 
a
 
g
r
a
p
h
 
w
i
t
h
 
V
 
v
e
r
t
i
c
e
s
 
h
a
s
 
e
x
a
c
t
l
y
 
h
o
w
 
m
a
n
y
 
e
d
g
e
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
V
"
,
 
"
V
 
−
 
1
"
,
 
"
V
 
+
 
1
"
,
 
"
E
 
−
 
V
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
A
 
t
r
e
e
 
o
n
 
V
 
n
o
d
e
s
 
h
a
s
 
V
 
−
 
1
 
e
d
g
e
s
.
 
A
d
d
i
n
g
 
a
n
y
 
m
o
r
e
 
w
o
u
l
d
 
c
r
e
a
t
e
 
a
 
c
y
c
l
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
K
r
u
s
k
a
l
'
s
 
a
l
g
o
r
i
t
h
m
 
u
s
e
s
 
U
n
i
o
n
-
F
i
n
d
 
f
o
r
 
w
h
a
t
 
p
u
r
p
o
s
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
S
o
r
t
 
e
d
g
e
s
"
,


 
 
 
 
 
 
 
 
"
C
o
m
p
u
t
e
 
w
e
i
g
h
t
s
"
,


 
 
 
 
 
 
 
 
"
D
e
t
e
c
t
 
c
y
c
l
e
s
 
e
f
f
i
c
i
e
n
t
l
y
 
(
n
e
a
r
l
y
 
O
(
1
)
 
p
e
r
 
o
p
)
"
,


 
 
 
 
 
 
 
 
"
S
t
o
r
e
 
t
h
e
 
M
S
T
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
F
i
n
d
 
t
e
l
l
s
 
u
s
 
i
f
 
t
w
o
 
e
n
d
p
o
i
n
t
s
 
a
r
e
 
a
l
r
e
a
d
y
 
c
o
n
n
e
c
t
e
d
.
 
U
n
i
o
n
 
m
e
r
g
e
s
 
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
 
w
h
e
n
 
a
n
 
e
d
g
e
 
i
s
 
a
d
d
e
d
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
P
r
i
m
'
s
 
a
l
g
o
r
i
t
h
m
 
w
i
t
h
 
a
 
b
i
n
a
r
y
 
h
e
a
p
 
h
a
s
 
c
o
m
p
l
e
x
i
t
y
…
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
O
(
V
²
)
"
,
 
"
O
(
E
 
l
o
g
 
V
)
"
,
 
"
O
(
V
 
+
 
E
)
"
,
 
"
O
(
V
·
E
)
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
E
a
c
h
 
e
d
g
e
 
t
r
i
g
g
e
r
s
 
a
t
 
m
o
s
t
 
o
n
e
 
d
e
c
r
e
a
s
e
-
k
e
y
;
 
V
 
e
x
t
r
a
c
t
-
m
i
n
s
.
 
T
o
t
a
l
 
O
(
(
V
 
+
 
E
)
 
l
o
g
 
V
)
 
≈
 
O
(
E
 
l
o
g
 
V
)
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
I
f
 
a
l
l
 
e
d
g
e
 
w
e
i
g
h
t
s
 
a
r
e
 
d
i
s
t
i
n
c
t
,
 
t
h
e
 
M
S
T
 
i
s
…
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
N
o
t
 
g
u
a
r
a
n
t
e
e
d
 
t
o
 
e
x
i
s
t
"
,
 
"
U
n
i
q
u
e
"
,
 
"
E
m
p
t
y
"
,
 
"
T
h
e
 
s
a
m
e
 
a
s
 
t
h
e
 
g
r
a
p
h
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
W
i
t
h
 
d
i
s
t
i
n
c
t
 
w
e
i
g
h
t
s
,
 
e
v
e
r
y
 
c
u
t
 
h
a
s
 
a
 
u
n
i
q
u
e
 
m
i
n
i
m
u
m
 
e
d
g
e
,
 
a
n
d
 
t
h
e
 
M
S
T
 
i
s
 
d
e
t
e
r
m
i
n
e
d
 
u
n
i
q
u
e
l
y
 
b
y
 
t
h
e
 
c
u
t
 
p
r
o
p
e
r
t
y
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
M
i
n
i
m
u
m
 
S
p
a
n
n
i
n
g
 
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
4
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
7
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
H
i
g
h
,
 
n
e
t
w
o
r
k
i
n
g
,
 
c
l
u
s
t
e
r
i
n
g
,
 
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
i
o
n
 
a
l
g
o
r
i
t
h
m
s
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
B
u
b
b
l
e
 
&
 
S
e
l
e
c
t
i
o
n
 
S
o
r
t
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


