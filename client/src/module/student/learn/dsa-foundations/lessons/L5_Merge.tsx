
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
s
o
r
t
i
n
g
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
 
 
L
o
c
a
l
 
t
y
p
e
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




t
y
p
e
 
C
e
l
l
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
c
o
m
p
a
r
e
"
 
|
 
"
s
w
a
p
"
 
|
 
"
s
o
r
t
e
d
"
 
|
 
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
p
i
v
o
t
"
 
|
 
"
v
i
s
i
t
e
d
"
 
|
 
"
d
o
n
e
"
 
|
 
"
l
o
w
"
 
|
 
"
h
i
g
h
"
 
|
 
"
m
i
d
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
 
 
L
o
c
a
l
 
A
r
r
a
y
B
a
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




c
o
n
s
t
 
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
S
:
 
R
e
c
o
r
d
<
C
e
l
l
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
b
o
r
d
e
r
,


 
 
c
o
m
p
a
r
e
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


 
 
s
w
a
p
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


 
 
s
o
r
t
e
d
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


 
 
a
c
t
i
v
e
:
 
"
#
8
1
8
c
f
8
"
,


 
 
p
i
v
o
t
:
 
"
#
f
9
7
3
1
6
"
,


 
 
v
i
s
i
t
e
d
:
 
"
#
d
6
d
3
d
1
"
,


 
 
d
o
n
e
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


 
 
l
o
w
:
 
"
#
6
0
a
5
f
a
"
,


 
 
h
i
g
h
:
 
"
#
f
8
7
1
7
1
"
,


 
 
m
i
d
:
 
"
#
f
b
9
2
3
c
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
 
A
r
r
a
y
B
a
r
s
(
{


 
 
v
a
l
u
e
s
,


 
 
s
t
a
t
e
s
,


 
 
p
o
i
n
t
e
r
s
,


 
 
h
e
i
g
h
t
 
=
 
1
6
0
,


}
:
 
{


 
 
v
a
l
u
e
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


 
 
s
t
a
t
e
s
?
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
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
 
n
u
m
b
e
r
>
;


 
 
h
e
i
g
h
t
?
:
 
n
u
m
b
e
r
;


}
)
 
{


 
 
c
o
n
s
t
 
m
a
x
 
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
v
a
l
u
e
s
,
 
1
)
;


 
 
c
o
n
s
t
 
b
a
r
W
 
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
2
4
,
 
M
a
t
h
.
m
i
n
(
4
8
,
 
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
4
8
0
 
/
 
(
v
a
l
u
e
s
.
l
e
n
g
t
h
 
|
|
 
1
)
)
)
)
;


 
 
c
o
n
s
t
 
g
a
p
 
=
 
4
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
 
v
a
l
u
e
s
.
l
e
n
g
t
h
 
*
 
(
b
a
r
W
 
+
 
g
a
p
)
 
-
 
g
a
p
;




 
 
c
o
n
s
t
 
p
t
r
B
y
I
d
x
:
 
R
e
c
o
r
d
<
n
u
m
b
e
r
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
 
=
 
{
}
;


 
 
i
f
 
(
p
o
i
n
t
e
r
s
)
 
{


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
[
n
a
m
e
,
 
i
d
x
]
 
o
f
 
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
p
o
i
n
t
e
r
s
)
)
 
{


 
 
 
 
 
 
i
f
 
(
!
p
t
r
B
y
I
d
x
[
i
d
x
]
)
 
p
t
r
B
y
I
d
x
[
i
d
x
]
 
=
 
[
]
;


 
 
 
 
 
 
p
t
r
B
y
I
d
x
[
i
d
x
]
.
p
u
s
h
(
n
a
m
e
)
;


 
 
 
 
}


 
 
}




 
 
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
"
>


 
 
 
 
 
 
<
d
i
v
 
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
 
t
o
t
a
l
W
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
,
 
h
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
 
+
 
3
2
 
}
}
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
t
o
t
a
l
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
h
e
i
g
h
t
 
+
 
3
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
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
v
a
l
u
e
s
.
m
a
p
(
(
v
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
a
r
H
 
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
4
,
 
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
(
v
 
/
 
m
a
x
)
 
*
 
(
h
e
i
g
h
t
 
-
 
8
)
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
 
=
 
i
 
*
 
(
b
a
r
W
 
+
 
g
a
p
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
h
e
i
g
h
t
 
-
 
b
a
r
H
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
a
t
e
 
=
 
(
s
t
a
t
e
s
?
.
[
i
]
 
?
?
 
"
d
e
f
a
u
l
t
"
)
 
a
s
 
C
e
l
l
S
t
a
t
e
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
 
=
 
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
S
[
s
t
a
t
e
]
 
?
?
 
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
S
.
d
e
f
a
u
l
t
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
t
r
s
 
=
 
p
t
r
B
y
I
d
x
[
i
]
 
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
g
 
k
e
y
=
{
i
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
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
b
a
r
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
b
a
r
H
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
o
l
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
x
=
{
3
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
2
5
s
 
e
a
s
e
"
 
}
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
x
 
+
 
b
a
r
W
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
h
e
i
g
h
t
 
+
 
1
2
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
1
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
t
r
s
.
m
a
p
(
(
p
,
 
p
i
)
 
=
>
 
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
p
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
=
{
x
 
+
 
b
a
r
W
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
h
e
i
g
h
t
 
+
 
2
6
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
9
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
c
a
l
 
R
e
c
u
r
s
i
o
n
N
o
d
e
 
/
 
R
e
c
u
r
s
i
o
n
T
r
e
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
R
e
c
u
r
s
i
o
n
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


 
 
p
a
r
e
n
t
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


 
 
d
e
p
t
h
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
e
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
d
o
n
e
"
 
|
 
"
p
e
n
d
i
n
g
"
;


 
 
r
e
t
u
r
n
V
a
l
u
e
?
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
 
R
e
c
u
r
s
i
o
n
T
r
e
e
(
{


 
 
n
o
d
e
s
,


 
 
a
c
t
i
v
e
I
d
,


}
:
 
{


 
 
n
o
d
e
s
:
 
R
e
c
u
r
s
i
o
n
N
o
d
e
[
]
;


 
 
a
c
t
i
v
e
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


}
)
 
{


 
 
i
f
 
(
n
o
d
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
 
p
y
-
4
"
>
T
r
e
e
 
b
u
i
l
d
s
 
a
s
 
r
e
c
u
r
s
i
o
n
 
u
n
f
o
l
d
s
.
.
.
<
/
p
>


 
 
 
 
)
;


 
 
}




 
 
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
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
n
.
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
 
b
y
D
e
p
t
h
:
 
R
e
c
u
r
s
i
o
n
N
o
d
e
[
]
[
]
 
=
 
[
]
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


 
 
 
 
b
y
D
e
p
t
h
[
d
]
 
=
 
n
o
d
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
n
)
 
=
>
 
n
.
d
e
p
t
h
 
=
=
=
 
d
)
;


 
 
}




 
 
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
2
 
p
y
-
2
"
>


 
 
 
 
 
 
{
b
y
D
e
p
t
h
.
m
a
p
(
(
r
o
w
,
 
d
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


 
 
 
 
 
 
 
 
 
 
{
r
o
w
.
m
a
p
(
(
n
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
A
c
t
i
v
e
 
=
 
n
.
i
d
 
=
=
=
 
a
c
t
i
v
e
I
d
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
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
n
.
i
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
{
`
p
x
-
2
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
s
A
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
4
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
4
0
0
/
1
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
n
.
s
t
a
t
e
 
=
=
=
 
"
d
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
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
 
 
F
r
a
m
e
 
t
y
p
e
s
 
&
 
b
u
i
l
d
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
v
a
l
u
e
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


 
 
s
t
a
t
e
s
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
;


 
 
p
o
i
n
t
e
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
 
n
u
m
b
e
r
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


 
 
t
r
e
e
N
o
d
e
s
:
 
R
e
c
u
r
s
i
o
n
N
o
d
e
[
]
;


 
 
a
c
t
i
v
e
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


 
 
h
i
g
h
l
i
g
h
t
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
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
m
e
r
g
e
S
o
r
t
(
A
,
 
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
 
 
i
f
 
l
o
 
>
=
 
h
i
:
 
r
e
t
u
r
n
"
,


 
 
"
 
 
m
i
d
 
<
-
 
(
l
o
 
+
 
h
i
)
 
/
 
2
"
,


 
 
"
 
 
m
e
r
g
e
S
o
r
t
(
A
,
 
l
o
,
 
m
i
d
)
"
,


 
 
"
 
 
m
e
r
g
e
S
o
r
t
(
A
,
 
m
i
d
+
1
,
 
h
i
)
"
,


 
 
"
 
 
m
e
r
g
e
(
A
,
 
l
o
,
 
m
i
d
,
 
h
i
)
"
,


 
 
"
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
 
m
e
r
g
e
(
A
,
 
l
o
,
 
m
i
d
,
 
h
i
)
:
"
,


 
 
"
 
 
i
 
<
-
 
l
o
;
 
j
 
<
-
 
m
i
d
+
1
;
 
k
 
<
-
 
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
 
i
 
<
=
 
m
i
d
 
a
n
d
 
j
 
<
=
 
h
i
:
"
,


 
 
"
 
 
 
 
i
f
 
A
[
i
]
 
<
=
 
A
[
j
]
:
 
B
[
k
+
+
]
 
<
-
 
A
[
i
+
+
]
"
,


 
 
"
 
 
 
 
e
l
s
e
:
 
B
[
k
+
+
]
 
<
-
 
A
[
j
+
+
]
"
,


 
 
"
 
 
c
o
p
y
 
l
e
f
t
o
v
e
r
s
;
 
c
o
p
y
 
B
 
b
a
c
k
 
i
n
t
o
 
A
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
F
r
a
m
e
s
(
i
n
p
u
t
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
 
A
 
=
 
[
.
.
.
i
n
p
u
t
]
;


 
 
c
o
n
s
t
 
n
 
=
 
A
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
 
f
r
a
m
e
s
:
 
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


 
 
l
e
t
 
m
e
r
g
e
O
p
s
 
=
 
0
;


 
 
l
e
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
 
0
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
u
r
s
i
o
n
N
o
d
e
[
]
 
=
 
[
]
;


 
 
l
e
t
 
i
d
C
o
u
n
t
e
r
 
=
 
0
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
:
 
0
,
 
v
a
r
s
:
 
{
 
n
,
 
m
e
r
g
e
s
:
 
0
,
 
m
a
x
D
e
p
t
h
:
 
0
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
s
t
a
t
e
s
:
 
A
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,
 
p
o
i
n
t
e
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
i
n
g
 
m
e
r
g
e
 
s
o
r
t
 
o
n
 
[
$
{
A
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
,


 
 
 
 
t
r
e
e
N
o
d
e
s
:
 
[
]
,
 
a
c
t
i
v
e
I
d
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


 
 
}
)
;




 
 
c
o
n
s
t
 
s
t
a
t
e
R
a
n
g
e
 
=
 
(
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
,
 
s
t
:
 
C
e
l
l
S
t
a
t
e
)
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
>
 
{


 
 
 
 
r
e
t
u
r
n
 
A
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
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
 
?
 
s
t
 
:
 
"
d
e
f
a
u
l
t
"
)
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
 
s
o
r
t
(
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
,
 
p
a
r
e
n
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
 
c
u
r
D
e
p
t
h
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


 
 
 
 
c
o
n
s
t
 
m
y
I
d
 
=
 
`
n
$
{
i
d
C
o
u
n
t
e
r
+
+
}
`
;


 
 
 
 
c
o
n
s
t
 
l
a
b
e
l
 
=
 
`
[
$
{
l
o
}
.
.
$
{
h
i
}
]
`
;


 
 
 
 
n
o
d
e
s
.
p
u
s
h
(
{
 
i
d
:
 
m
y
I
d
,
 
l
a
b
e
l
,
 
p
a
r
e
n
t
:
 
p
a
r
e
n
t
I
d
,
 
d
e
p
t
h
:
 
c
u
r
D
e
p
t
h
,
 
s
t
a
t
e
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
m
a
x
D
e
p
t
h
,
 
c
u
r
D
e
p
t
h
)
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
:
 
0
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
 
d
e
p
t
h
:
 
c
u
r
D
e
p
t
h
,
 
m
a
x
D
e
p
t
h
,
 
m
e
r
g
e
s
:
 
m
e
r
g
e
O
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
R
a
n
g
e
(
l
o
,
 
h
i
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
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
h
i
 
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
C
a
l
l
 
m
e
r
g
e
S
o
r
t
(
A
,
 
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
)
 
a
t
 
d
e
p
t
h
 
$
{
c
u
r
D
e
p
t
h
}
`
,


 
 
 
 
 
 
t
r
e
e
N
o
d
e
s
:
 
[
.
.
.
n
o
d
e
s
]
,
 
a
c
t
i
v
e
I
d
:
 
m
y
I
d
,


 
 
 
 
}
)
;




 
 
 
 
i
f
 
(
l
o
 
>
=
 
h
i
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
i
d
x
 
=
 
n
o
d
e
s
.
f
i
n
d
I
n
d
e
x
(
(
x
)
 
=
>
 
x
.
i
d
 
=
=
=
 
m
y
I
d
)
;


 
 
 
 
 
 
i
f
 
(
i
d
x
 
>
=
 
0
)
 
n
o
d
e
s
[
i
d
x
]
 
=
 
{
 
.
.
.
n
o
d
e
s
[
i
d
x
]
,
 
s
t
a
t
e
:
 
"
d
o
n
e
"
,
 
r
e
t
u
r
n
V
a
l
u
e
:
 
A
[
l
o
]
 
}
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
:
 
1
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
 
d
e
p
t
h
:
 
c
u
r
D
e
p
t
h
,
 
m
a
x
D
e
p
t
h
,
 
m
e
r
g
e
s
:
 
m
e
r
g
e
O
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
R
a
n
g
e
(
l
o
,
 
h
i
,
 
"
s
o
r
t
e
d
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
 
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
B
a
s
e
 
c
a
s
e
:
 
s
i
n
g
l
e
 
e
l
e
m
e
n
t
 
A
[
$
{
l
o
}
]
 
=
 
$
{
A
[
l
o
]
}
 
i
s
 
a
l
r
e
a
d
y
 
s
o
r
t
e
d
.
`
,


 
 
 
 
 
 
 
 
t
r
e
e
N
o
d
e
s
:
 
[
.
.
.
n
o
d
e
s
]
,
 
a
c
t
i
v
e
I
d
:
 
m
y
I
d
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
m
y
I
d
;


 
 
 
 
}




 
 
 
 
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
(
l
o
 
+
 
h
i
)
 
/
 
2
)
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
:
 
2
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
 
m
i
d
,
 
d
e
p
t
h
:
 
c
u
r
D
e
p
t
h
,
 
m
e
r
g
e
s
:
 
m
e
r
g
e
O
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
A
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
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
 
m
i
d
)
 
r
e
t
u
r
n
 
"
l
o
w
"
;


 
 
 
 
 
 
 
 
i
f
 
(
k
 
>
 
m
i
d
 
&
&
 
k
 
<
=
 
h
i
)
 
r
e
t
u
r
n
 
"
h
i
g
h
"
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
m
i
d
,
 
h
i
 
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
m
i
d
 
=
 
f
l
o
o
r
(
(
$
{
l
o
}
+
$
{
h
i
}
)
/
2
)
 
=
 
$
{
m
i
d
}
.
 
S
p
l
i
t
 
i
n
t
o
 
[
$
{
l
o
}
.
.
$
{
m
i
d
}
]
 
a
n
d
 
[
$
{
m
i
d
 
+
 
1
}
.
.
$
{
h
i
}
]
.
`
,


 
 
 
 
 
 
t
r
e
e
N
o
d
e
s
:
 
[
.
.
.
n
o
d
e
s
]
,
 
a
c
t
i
v
e
I
d
:
 
m
y
I
d
,


 
 
 
 
}
)
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
:
 
3
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
 
m
i
d
,
 
d
e
p
t
h
:
 
c
u
r
D
e
p
t
h
,
 
m
e
r
g
e
s
:
 
m
e
r
g
e
O
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
R
a
n
g
e
(
l
o
,
 
m
i
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
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
m
i
d
 
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
R
e
c
u
r
s
e
 
o
n
 
l
e
f
t
 
h
a
l
f
 
[
$
{
l
o
}
.
.
$
{
m
i
d
}
]
`
,


 
 
 
 
 
 
t
r
e
e
N
o
d
e
s
:
 
[
.
.
.
n
o
d
e
s
]
,
 
a
c
t
i
v
e
I
d
:
 
m
y
I
d
,


 
 
 
 
}
)
;


 
 
 
 
s
o
r
t
(
l
o
,
 
m
i
d
,
 
m
y
I
d
,
 
c
u
r
D
e
p
t
h
 
+
 
1
)
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
:
 
4
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
 
m
i
d
,
 
d
e
p
t
h
:
 
c
u
r
D
e
p
t
h
,
 
m
e
r
g
e
s
:
 
m
e
r
g
e
O
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
R
a
n
g
e
(
m
i
d
 
+
 
1
,
 
h
i
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
,
 
p
o
i
n
t
e
r
s
:
 
{
 
m
i
d
,
 
h
i
 
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
R
e
c
u
r
s
e
 
o
n
 
r
i
g
h
t
 
h
a
l
f
 
[
$
{
m
i
d
 
+
 
1
}
.
.
$
{
h
i
}
]
`
,


 
 
 
 
 
 
t
r
e
e
N
o
d
e
s
:
 
[
.
.
.
n
o
d
e
s
]
,
 
a
c
t
i
v
e
I
d
:
 
m
y
I
d
,


 
 
 
 
}
)
;


 
 
 
 
s
o
r
t
(
m
i
d
 
+
 
1
,
 
h
i
,
 
m
y
I
d
,
 
c
u
r
D
e
p
t
h
 
+
 
1
)
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
:
 
5
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
 
m
i
d
,
 
d
e
p
t
h
:
 
c
u
r
D
e
p
t
h
,
 
m
e
r
g
e
s
:
 
m
e
r
g
e
O
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
A
.
m
a
p
(
(
_
,
 
k
)
 
=
>
 
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
 
m
i
d
)
 
r
e
t
u
r
n
 
"
l
o
w
"
;


 
 
 
 
 
 
 
 
i
f
 
(
k
 
>
 
m
i
d
 
&
&
 
k
 
<
=
 
h
i
)
 
r
e
t
u
r
n
 
"
h
i
g
h
"
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
}
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
m
i
d
,
 
h
i
 
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
M
e
r
g
e
 
s
o
r
t
e
d
 
h
a
l
v
e
s
 
[
$
{
l
o
}
.
.
$
{
m
i
d
}
]
 
a
n
d
 
[
$
{
m
i
d
 
+
 
1
}
.
.
$
{
h
i
}
]
`
,


 
 
 
 
 
 
t
r
e
e
N
o
d
e
s
:
 
[
.
.
.
n
o
d
e
s
]
,
 
a
c
t
i
v
e
I
d
:
 
m
y
I
d
,


 
 
 
 
}
)
;




 
 
 
 
c
o
n
s
t
 
b
u
f
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


 
 
 
 
l
e
t
 
i
 
=
 
l
o
,
 
j
 
=
 
m
i
d
 
+
 
1
;


 
 
 
 
w
h
i
l
e
 
(
i
 
<
=
 
m
i
d
 
&
&
 
j
 
<
=
 
h
i
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
s
t
:
 
(
C
e
l
l
S
t
a
t
e
 
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
)
[
]
 
=
 
A
.
m
a
p
(
(
)
 
=
>
 
"
d
e
f
a
u
l
t
"
)
;


 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
l
o
;
 
k
 
<
=
 
m
i
d
;
 
k
+
+
)
 
s
t
[
k
]
 
=
 
"
l
o
w
"
;


 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
m
i
d
 
+
 
1
;
 
k
 
<
=
 
h
i
;
 
k
+
+
)
 
s
t
[
k
]
 
=
 
"
h
i
g
h
"
;


 
 
 
 
 
 
s
t
[
i
]
 
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
;


 
 
 
 
 
 
s
t
[
j
]
 
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
:
 
1
0
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
 
m
i
d
,
 
i
,
 
j
,
 
"
A
[
i
]
"
:
 
A
[
i
]
,
 
"
A
[
j
]
"
:
 
A
[
j
]
,
 
m
e
r
g
e
s
:
 
m
e
r
g
e
O
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
,
 
p
o
i
n
t
e
r
s
:
 
{
 
i
,
 
j
 
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
C
o
m
p
a
r
e
 
A
[
$
{
i
}
]
 
=
 
$
{
A
[
i
]
}
 
v
s
 
A
[
$
{
j
}
]
 
=
 
$
{
A
[
j
]
}
`
,


 
 
 
 
 
 
 
 
t
r
e
e
N
o
d
e
s
:
 
[
.
.
.
n
o
d
e
s
]
,
 
a
c
t
i
v
e
I
d
:
 
m
y
I
d
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
i
f
 
(
A
[
i
]
 
<
=
 
A
[
j
]
)
 
{


 
 
 
 
 
 
 
 
b
u
f
.
p
u
s
h
(
A
[
i
]
)
;


 
 
 
 
 
 
 
 
i
+
+
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
b
u
f
.
p
u
s
h
(
A
[
j
]
)
;


 
 
 
 
 
 
 
 
j
+
+
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
w
h
i
l
e
 
(
i
 
<
=
 
m
i
d
)
 
{
 
b
u
f
.
p
u
s
h
(
A
[
i
+
+
]
)
;
 
}


 
 
 
 
w
h
i
l
e
 
(
j
 
<
=
 
h
i
)
 
{
 
b
u
f
.
p
u
s
h
(
A
[
j
+
+
]
)
;
 
}




 
 
 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
0
;
 
k
 
<
 
b
u
f
.
l
e
n
g
t
h
;
 
k
+
+
)
 
A
[
l
o
 
+
 
k
]
 
=
 
b
u
f
[
k
]
;


 
 
 
 
m
e
r
g
e
O
p
s
+
+
;




 
 
 
 
c
o
n
s
t
 
i
d
x
 
=
 
n
o
d
e
s
.
f
i
n
d
I
n
d
e
x
(
(
x
)
 
=
>
 
x
.
i
d
 
=
=
=
 
m
y
I
d
)
;


 
 
 
 
i
f
 
(
i
d
x
 
>
=
 
0
)
 
n
o
d
e
s
[
i
d
x
]
 
=
 
{
 
.
.
.
n
o
d
e
s
[
i
d
x
]
,
 
s
t
a
t
e
:
 
"
d
o
n
e
"
 
}
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
:
 
1
2
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
 
m
i
d
,
 
m
e
r
g
e
s
:
 
m
e
r
g
e
O
p
s
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
 
 
s
t
a
t
e
s
:
 
s
t
a
t
e
R
a
n
g
e
(
l
o
,
 
h
i
,
 
"
s
o
r
t
e
d
"
)
,
 
p
o
i
n
t
e
r
s
:
 
{
 
l
o
,
 
h
i
 
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
M
e
r
g
e
d
:
 
A
[
$
{
l
o
}
.
.
$
{
h
i
}
]
 
=
 
[
$
{
b
u
f
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
,


 
 
 
 
 
 
t
r
e
e
N
o
d
e
s
:
 
[
.
.
.
n
o
d
e
s
]
,
 
a
c
t
i
v
e
I
d
:
 
m
y
I
d
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
K
e
y
:
 
"
m
e
r
g
e
s
"
,


 
 
 
 
}
)
;




 
 
 
 
r
e
t
u
r
n
 
m
y
I
d
;


 
 
}




 
 
i
f
 
(
n
 
>
 
0
)
 
s
o
r
t
(
0
,
 
n
 
-
 
1
,
 
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
 
0
)
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
:
 
0
,
 
v
a
r
s
:
 
{
 
n
,
 
m
e
r
g
e
s
:
 
m
e
r
g
e
O
p
s
,
 
m
a
x
D
e
p
t
h
 
}
,
 
v
a
l
u
e
s
:
 
[
.
.
.
A
]
,


 
 
 
 
s
t
a
t
e
s
:
 
A
.
m
a
p
(
(
)
 
=
>
 
"
s
o
r
t
e
d
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,
 
p
o
i
n
t
e
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
D
o
n
e
.
 
S
o
r
t
e
d
:
 
[
$
{
A
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
 
$
{
m
e
r
g
e
O
p
s
}
 
m
e
r
g
e
s
 
a
t
 
m
a
x
 
d
e
p
t
h
 
$
{
m
a
x
D
e
p
t
h
}
.
`
,


 
 
 
 
t
r
e
e
N
o
d
e
s
:
 
[
.
.
.
n
o
d
e
s
]
,


 
 
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
 
p
a
r
s
e
A
r
r
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
:
 
n
u
m
b
e
r
[
]
 
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
 
n
u
m
s
 
=
 
s
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
.
m
a
p
(
(
x
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
x
.
t
r
i
m
(
)
)
)
;


 
 
i
f
 
(
n
u
m
s
.
s
o
m
e
(
(
n
)
 
=
>
 
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


 
 
i
f
 
(
n
u
m
s
.
l
e
n
g
t
h
 
<
 
2
 
|
|
 
n
u
m
s
.
l
e
n
g
t
h
 
>
 
1
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


 
 
r
e
t
u
r
n
 
n
u
m
s
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
5
,
 
2
,
 
4
,
 
6
,
 
1
,
 
3
,
 
7
,
 
8
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
A
r
r
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
 
?
?
 
[
5
,
 
2
,
 
4
,
 
6
,
 
1
,
 
3
,
 
7
,
 
8
]
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
)
,
 
[
p
a
r
s
e
d
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
"
M
e
r
g
e
 
S
o
r
t
"


 
 
 
 
 
 
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
A
r
r
a
y
 
(
2
-
1
0
 
n
u
m
b
e
r
s
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
e
.
g
.
 
5
,
 
2
,
 
4
,
 
6
,
 
1
,
 
3
,
 
7
,
 
8
"


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
P
o
w
e
r
s
 
o
f
 
2
 
(
4
,
 
8
)
 
p
r
o
d
u
c
e
 
b
e
a
u
t
i
f
u
l
l
y
 
b
a
l
a
n
c
e
d
 
r
e
c
u
r
s
i
o
n
 
t
r
e
e
s
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
R
a
n
d
o
m
 
8
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
 
2
,
 
4
,
 
6
,
 
1
,
 
3
,
 
7
,
 
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
R
e
v
e
r
s
e
 
8
"
,
 
v
a
l
u
e
:
 
"
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
o
r
t
e
d
 
6
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
m
a
l
l
 
4
"
,
 
v
a
l
u
e
:
 
"
3
,
 
1
,
 
4
,
 
2
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
A
r
r
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


 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
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
 
n
 
=
 
4
 
+
 
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
5
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
r
r
 
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
 
n
 
}
,
 
(
)
 
=
>
 
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
3
0
)
)
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
(
a
r
r
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
h
i
g
h
l
i
g
h
t
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
h
i
g
h
l
i
g
h
t
K
e
y
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
A
r
r
a
y
B
a
r
s


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
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
l
u
e
s
 
?
?
 
p
a
r
s
e
d
}


 
 
 
 
 
 
 
 
 
 
s
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
?
.
s
t
a
t
e
s
}


 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
e
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
p
o
i
n
t
e
r
s
}


 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
1
6
0
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
/
5
0
 
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
e
c
u
r
s
i
o
n
 
t
r
e
e


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
R
e
c
u
r
s
i
o
n
T
r
e
e
 
n
o
d
e
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
t
r
e
e
N
o
d
e
s
 
?
?
 
[
]
}
 
a
c
t
i
v
e
I
d
=
{
f
r
a
m
e
?
.
a
c
t
i
v
e
I
d
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
C
a
l
l
o
u
t
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
 
t
h
e
 
a
l
g
o
r
i
t
h
m
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
 
p
r
o
p
s
 
=
 
[


 
 
 
 
{
 
t
:
 
"
R
e
c
u
r
s
i
o
n
 
t
r
e
e
"
,
 
b
:
 
"
l
o
g
 
n
 
l
e
v
e
l
s
 
d
e
e
p
.
 
E
a
c
h
 
l
e
v
e
l
 
p
r
o
c
e
s
s
e
s
 
a
l
l
 
n
 
e
l
e
m
e
n
t
s
 
d
u
r
i
n
g
 
m
e
r
g
e
s
,
 
s
o
 
O
(
n
 
l
o
g
 
n
)
 
t
o
t
a
l
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
S
t
a
b
l
e
"
,
 
b
:
 
"
W
h
e
n
 
A
[
i
]
 
<
=
 
A
[
j
]
 
w
e
 
p
i
c
k
 
l
e
f
t
;
 
e
q
u
a
l
 
e
l
e
m
e
n
t
s
 
k
e
e
p
 
t
h
e
i
r
 
o
r
i
g
i
n
a
l
 
o
r
d
e
r
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
N
o
t
 
i
n
-
p
l
a
c
e
"
,
 
b
:
 
"
N
e
e
d
s
 
O
(
n
)
 
a
u
x
i
l
i
a
r
y
 
b
u
f
f
e
r
 
d
u
r
i
n
g
 
e
a
c
h
 
m
e
r
g
e
.
 
T
r
a
d
e
-
o
f
f
 
f
o
r
 
t
h
e
 
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
 
s
p
e
e
d
.
"
 
}
,


 
 
 
 
{
 
t
:
 
"
W
o
r
s
t
 
=
 
a
v
e
r
a
g
e
"
,
 
b
:
 
"
U
n
l
i
k
e
 
q
u
i
c
k
s
o
r
t
,
 
n
o
 
p
a
t
h
o
l
o
g
i
c
a
l
 
i
n
p
u
t
 
e
x
i
s
t
s
:
 
O
(
n
 
l
o
g
 
n
)
 
a
l
w
a
y
s
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
D
i
v
i
d
e
-
a
n
d
-
c
o
n
q
u
e
r
 
i
n
 
t
h
r
e
e
 
b
e
a
t
s
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
S
p
l
i
t
,
 
s
o
r
t
 
e
a
c
h
 
h
a
l
f
,
 
m
e
r
g
e
 
t
h
e
m
 
b
a
c
k
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


 
 
 
 
 
 
 
 
 
 
D
i
v
i
d
e
 
t
h
e
 
a
r
r
a
y
 
a
t
 
t
h
e
 
m
i
d
d
l
e
.
 
C
o
n
q
u
e
r
 
e
a
c
h
 
h
a
l
f
 
b
y
 
s
o
r
t
i
n
g
 
i
t
 
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
.
 
C
o
m
b
i
n
e
 
t
h
e


 
 
 
 
 
 
 
 
 
 
t
w
o
 
s
o
r
t
e
d
 
h
a
l
v
e
s
 
b
y
 
m
e
r
g
i
n
g
 
t
h
e
m
 
i
n
t
o
 
o
n
e
.
 
T
h
e
 
m
e
r
g
e
 
s
t
e
p
 
i
s
 
t
h
e
 
c
l
e
v
e
r
 
p
a
r
t
:
 
t
w
o
 
s
o
r
t
e
d


 
 
 
 
 
 
 
 
 
 
a
r
r
a
y
s
 
m
e
r
g
e
 
i
n
 
l
i
n
e
a
r
 
t
i
m
e
 
w
i
t
h
 
t
w
o
 
p
o
i
n
t
e
r
s
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
p
r
o
p
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
1
 
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
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
M
a
s
t
e
r
 
t
h
e
o
r
e
m
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
 
T
(
n
)
 
=
 
2
T
(
n
/
2
)
 
+
 
O
(
n
)
 
g
i
v
e
s
 
O
(
n
 
l
o
g
 
n
)
.
 
M
e
m
o
r
i
z
e
 
t
h
i
s


 
 
 
 
 
 
 
 
r
e
c
u
r
r
e
n
c
e
:
 
i
t
 
a
p
p
e
a
r
s
 
e
v
e
r
y
w
h
e
r
e
 
i
n
 
d
i
v
i
d
e
-
a
n
d
-
c
o
n
q
u
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


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
M
e
r
g
e
 
s
o
r
t
 
o
n
 
[
5
,
 
2
,
 
4
,
 
6
]
 
-
 
d
e
p
t
h
 
o
f
 
r
e
c
u
r
s
i
o
n
 
t
r
e
e
?
"
,
 
a
n
s
w
e
r
:
 
"
2
"
 
}
,


 
 
 
 
{
 
q
:
 
"
M
e
r
g
i
n
g
 
[
1
,
 
3
,
 
5
]
 
w
i
t
h
 
[
2
,
 
4
,
 
6
]
 
-
 
t
o
t
a
l
 
c
o
m
p
a
r
i
s
o
n
s
?
"
,
 
a
n
s
w
e
r
:
 
"
5
"
 
}
,


 
 
 
 
{
 
q
:
 
"
n
 
=
 
1
6
.
 
N
u
m
b
e
r
 
o
f
 
l
e
v
e
l
s
 
(
i
n
c
l
u
d
i
n
g
 
r
o
o
t
)
 
i
n
 
m
e
r
g
e
 
s
o
r
t
'
s
 
r
e
c
u
r
s
i
o
n
 
t
r
e
e
?
"
,
 
a
n
s
w
e
r
:
 
"
5
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
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
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
l
e
m
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
h
o
w
n
,
 
s
e
t
S
h
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
l
e
m
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
m
e
m
b
e
r
:
 
e
a
c
h
 
l
e
v
e
l
 
h
a
l
v
e
s
 
t
h
e
 
s
u
b
p
r
o
b
l
e
m
 
s
i
z
e
.
 
M
e
r
g
i
n
g
 
t
w
o
 
s
o
r
t
e
d
 
l
i
s
t
s
 
o
f
 
s
i
z
e
 
m
 
a
n
d
 
k


 
 
 
 
 
 
 
 
t
a
k
e
s
 
a
t
 
m
o
s
t
 
m
+
k
-
1
 
c
o
m
p
a
r
i
s
o
n
s
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
l
e
m
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
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
g
 
=
 
g
u
e
s
s
e
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
 
r
e
v
e
a
l
e
d
 
=
 
s
h
o
w
n
[
i
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
g
 
!
=
=
 
n
u
l
l
 
&
&
 
g
.
t
r
i
m
(
)
 
=
=
=
 
p
.
a
n
s
w
e
r
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
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
5
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
5
2
 
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
p
.
q
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
 
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
u
e
s
s
e
s
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
u
e
s
s
e
s
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
w
-
2
4
 
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
5
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
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
?
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
h
o
w
n
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
h
o
w
n
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
e
d
i
u
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
r
e
v
e
a
l
e
d
 
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
{
`
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
0
/
1
0
 
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
3
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
r
o
s
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
c
o
r
r
e
c
t
 
?
 
`
C
o
r
r
e
c
t
 
-
 
$
{
p
.
a
n
s
w
e
r
}
`
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
n
s
w
e
r
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
C
a
r
d
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
C
o
u
n
t
i
n
g
 
i
n
v
e
r
s
i
o
n
s
 
(
b
o
n
u
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


 
 
 
 
 
 
 
 
 
 
D
u
r
i
n
g
 
m
e
r
g
e
,
 
w
h
e
n
e
v
e
r
 
y
o
u
 
p
i
c
k
 
f
r
o
m
 
t
h
e
 
r
i
g
h
t
 
s
i
d
e
,
 
e
v
e
r
y
 
r
e
m
a
i
n
i
n
g
 
e
l
e
m
e
n
t
 
o
n
 
t
h
e
 
l
e
f
t


 
 
 
 
 
 
 
 
 
 
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
s
 
a
n
 
i
n
v
e
r
s
i
o
n
.
 
A
d
d
 
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
m
i
d
 
-
 
i
 
+
 
1
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
 
t
o
 
y
o
u
r
 
c
o
u
n
t
e
r
 
a
n
d


 
 
 
 
 
 
 
 
 
 
y
o
u
 
g
e
t
 
t
o
t
a
l
 
i
n
v
e
r
s
i
o
n
s
 
i
n
 
O
(
n
 
l
o
g
 
n
)
 
f
o
r
 
f
r
e
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
e
r
g
e
 
s
o
r
t
 
v
s
 
Q
u
i
c
k
s
o
r
t
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


 
 
 
 
 
 
 
 
 
 
M
e
r
g
e
:
 
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
 
O
(
n
 
l
o
g
 
n
)
,
 
s
t
a
b
l
e
,
 
O
(
n
)
 
e
x
t
r
a
 
m
e
m
o
r
y
;
 
g
r
e
a
t
 
f
o
r
 
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
s
 
a
n
d


 
 
 
 
 
 
 
 
 
 
e
x
t
e
r
n
a
l
 
s
o
r
t
i
n
g
 
(
d
a
t
a
 
b
i
g
g
e
r
 
t
h
a
n
 
R
A
M
)
.
 
Q
u
i
c
k
s
o
r
t
:
 
f
a
s
t
e
r
 
i
n
 
p
r
a
c
t
i
c
e
 
o
n
 
a
r
r
a
y
s
,


 
 
 
 
 
 
 
 
 
 
i
n
-
p
l
a
c
e
,
 
b
u
t
 
w
o
r
s
t
 
c
a
s
e
 
O
(
n
²
)
 
w
i
t
h
o
u
t
 
c
a
r
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
I
n
t
e
r
v
i
e
w
 
h
o
o
k
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
R
e
c
u
r
r
e
n
c
e
:
 
T
(
n
)
 
=
 
2
T
(
n
/
2
)
 
+
 
n
 
=
 
T
h
e
t
a
(
n
 
l
o
g
 
n
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


 
 
 
 
 
 
 
 
 
 
 
 
N
u
m
b
e
r
 
o
f
 
c
o
m
p
a
r
i
s
o
n
s
 
i
n
 
m
e
r
g
i
n
g
 
t
w
o
 
s
o
r
t
e
d
 
a
r
r
a
y
s
 
o
f
 
s
i
z
e
 
m
,
 
k
:
 
b
e
t
w
e
e
n
 
m
i
n
(
m
,
k
)
 
a
n
d


 
 
 
 
 
 
 
 
 
 
 
 
m
+
k
-
1
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
S
p
a
c
e
 
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
:
 
T
h
e
t
a
(
n
)
 
a
u
x
i
l
i
a
r
y
 
+
 
T
h
e
t
a
(
l
o
g
 
n
)
 
r
e
c
u
r
s
i
o
n
 
s
t
a
c
k
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
5
_
M
e
r
g
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
T
i
m
e
 
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
 
o
f
 
m
e
r
g
e
 
s
o
r
t
 
i
n
 
t
h
e
 
w
o
r
s
t
 
c
a
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
O
(
n
)
"
,
 
"
O
(
n
 
l
o
g
 
n
)
"
,
 
"
O
(
n
²
)
"
,
 
"
O
(
l
o
g
 
n
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
R
e
c
u
r
r
e
n
c
e
 
T
(
n
)
 
=
 
2
T
(
n
/
2
)
 
+
 
n
 
s
o
l
v
e
s
 
t
o
 
T
h
e
t
a
(
n
 
l
o
g
 
n
)
.
 
U
n
l
i
k
e
 
q
u
i
c
k
s
o
r
t
,
 
w
o
r
s
t
 
c
a
s
e
 
=
 
a
v
e
r
a
g
e
 
c
a
s
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
M
i
n
i
m
u
m
 
n
u
m
b
e
r
 
o
f
 
c
o
m
p
a
r
i
s
o
n
s
 
t
o
 
m
e
r
g
e
 
t
w
o
 
s
o
r
t
e
d
 
a
r
r
a
y
s
 
o
f
 
s
i
z
e
s
 
4
 
a
n
d
 
3
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
3
"
,
 
"
4
"
,
 
"
6
"
,
 
"
7
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
 
0
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
B
e
s
t
 
c
a
s
e
:
 
o
n
e
 
a
r
r
a
y
 
i
s
 
e
n
t
i
r
e
l
y
 
s
m
a
l
l
e
r
 
t
h
a
n
 
t
h
e
 
o
t
h
e
r
;
 
y
o
u
 
s
t
o
p
 
a
f
t
e
r
 
m
i
n
(
m
,
 
k
)
 
=
 
3
 
c
o
m
p
a
r
i
s
o
n
s
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
A
u
x
i
l
i
a
r
y
 
s
p
a
c
e
 
u
s
e
d
 
b
y
 
s
t
a
n
d
a
r
d
 
m
e
r
g
e
 
s
o
r
t
 
o
n
 
a
n
 
a
r
r
a
y
 
o
f
 
n
 
e
l
e
m
e
n
t
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
O
(
1
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
(
n
)
"
,
 
"
O
(
n
 
l
o
g
 
n
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
E
a
c
h
 
m
e
r
g
e
 
u
s
e
s
 
a
 
b
u
f
f
e
r
 
o
f
 
s
i
z
e
 
u
p
 
t
o
 
n
;
 
r
e
c
u
r
s
i
o
n
 
a
d
d
s
 
O
(
l
o
g
 
n
)
 
s
t
a
c
k
.
 
T
o
t
a
l
 
d
o
m
i
n
a
t
e
d
 
b
y
 
T
h
e
t
a
(
n
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
W
h
y
 
i
s
 
m
e
r
g
e
 
s
o
r
t
 
p
r
e
f
e
r
r
e
d
 
o
v
e
r
 
q
u
i
c
k
s
o
r
t
 
f
o
r
 
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
I
t
 
h
a
s
 
b
e
t
t
e
r
 
c
a
c
h
e
 
b
e
h
a
v
i
o
r
"
,


 
 
 
 
 
 
 
 
"
I
t
 
d
o
e
s
 
n
o
t
 
n
e
e
d
 
r
a
n
d
o
m
 
a
c
c
e
s
s
;
 
n
a
t
u
r
a
l
l
y
 
w
o
r
k
s
 
w
i
t
h
 
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
 
p
o
i
n
t
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
"
,


 
 
 
 
 
 
 
 
"
I
t
 
i
s
 
a
l
w
a
y
s
 
f
a
s
t
e
r
 
o
n
 
a
v
e
r
a
g
e
"
,


 
 
 
 
 
 
 
 
"
L
i
n
k
e
d
 
l
i
s
t
s
 
c
a
n
n
o
t
 
b
e
 
q
u
i
c
k
s
o
r
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
M
e
r
g
e
 
s
o
r
t
 
o
n
l
y
 
m
o
v
e
s
 
f
o
r
w
a
r
d
 
t
h
r
o
u
g
h
 
n
o
d
e
s
 
a
n
d
 
m
e
r
g
e
s
 
b
y
 
r
e
w
i
r
i
n
g
 
p
o
i
n
t
e
r
s
;
 
n
o
 
r
a
n
d
o
m
 
a
c
c
e
s
s
 
n
e
e
d
e
d
.
 
Q
u
i
c
k
s
o
r
t
'
s
 
p
a
r
t
i
t
i
o
n
 
w
a
n
t
s
 
A
[
i
]
 
a
c
c
e
s
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
M
e
r
g
e
 
S
o
r
t
"


 
 
 
 
 
 
l
e
v
e
l
=
{
5
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
3
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
V
e
r
y
 
c
o
m
m
o
n
:
 
i
n
v
e
r
s
i
o
n
 
c
o
u
n
t
i
n
g
,
 
e
x
t
e
r
n
a
l
 
s
o
r
t
i
n
g
,
 
l
i
n
k
e
d
-
l
i
s
t
 
s
o
r
t
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
Q
u
i
c
k
 
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


