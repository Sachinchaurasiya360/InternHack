
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


 
 
C
o
d
e
B
l
o
c
k
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




/
*
*


 
*
 
T
o
p
i
c
 
s
l
u
g
 
i
n
 
t
h
e
 
D
S
A
 
p
r
a
c
t
i
c
e
 
t
r
a
c
k
e
r
 
t
h
a
t
 
m
a
p
s
 
t
o
 
t
h
i
s
 
l
e
s
s
o
n
'
s
 
c
o
n
c
e
p
t
.


 
*
 
S
e
t
 
t
o
 
n
u
l
l
 
t
o
 
s
k
i
p
 
t
h
e
 
P
r
a
c
t
i
c
e
 
t
a
b
.
 
M
u
s
t
 
m
a
t
c
h
 
a
n
 
e
x
i
s
t
i
n
g
 
s
l
u
g
 
i
n
 
/
a
p
i
/
d
s
a
/
t
o
p
i
c
s
.


 
*
/


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
 
n
u
l
l
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
 
 
G
r
o
w
t
h
 
c
u
r
v
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




i
n
t
e
r
f
a
c
e
 
C
u
r
v
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


 
 
c
o
l
o
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
:
 
(
n
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
 
C
U
R
V
E
S
:
 
C
u
r
v
e
[
]
 
=
 
[


 
 
{
 
i
d
:
 
"
c
1
"
,
 
l
a
b
e
l
:
 
"
O
(
1
)
"
,
 
c
o
l
o
r
:
 
"
#
1
0
B
9
8
1
"
,
 
f
:
 
(
)
 
=
>
 
1
 
}
,


 
 
{
 
i
d
:
 
"
c
l
o
g
"
,
 
l
a
b
e
l
:
 
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
 
c
o
l
o
r
:
 
"
#
0
6
B
6
D
4
"
,
 
f
:
 
(
n
)
 
=
>
 
M
a
t
h
.
l
o
g
2
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
1
,
 
n
)
)
 
}
,


 
 
{
 
i
d
:
 
"
c
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
O
(
n
)
"
,
 
c
o
l
o
r
:
 
"
#
3
B
8
2
F
6
"
,
 
f
:
 
(
n
)
 
=
>
 
n
 
}
,


 
 
{
 
i
d
:
 
"
c
n
l
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
 
c
o
l
o
r
:
 
"
#
8
B
5
C
F
6
"
,
 
f
:
 
(
n
)
 
=
>
 
n
 
*
 
M
a
t
h
.
l
o
g
2
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
1
,
 
n
)
)
 
}
,


 
 
{
 
i
d
:
 
"
c
n
2
"
,
 
l
a
b
e
l
:
 
"
O
(
n
²
)
"
,
 
c
o
l
o
r
:
 
"
#
F
5
9
E
0
B
"
,
 
f
:
 
(
n
)
 
=
>
 
n
 
*
 
n
 
}
,


 
 
{
 
i
d
:
 
"
c
2
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
O
(
2
ⁿ
)
"
,
 
c
o
l
o
r
:
 
"
#
E
F
4
4
4
4
"
,
 
f
:
 
(
n
)
 
=
>
 
M
a
t
h
.
p
o
w
(
2
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
0
,
 
n
)
)
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
c
f
a
c
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
O
(
n
!
)
"
,


 
 
 
 
c
o
l
o
r
:
 
"
#
B
E
1
8
5
D
"
,


 
 
 
 
f
:
 
(
n
)
 
=
>
 
{


 
 
 
 
 
 
l
e
t
 
p
 
=
 
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
 
2
;
 
i
 
<
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
n
,
 
1
8
)
;
 
i
+
+
)
 
p
 
*
=
 
i
;


 
 
 
 
 
 
r
e
t
u
r
n
 
p
;


 
 
 
 
}
,


 
 
}
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
 
G
r
o
w
t
h
P
l
o
t
(
{


 
 
n
M
a
x
,


 
 
e
n
a
b
l
e
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
,


}
:
 
{


 
 
n
M
a
x
:
 
n
u
m
b
e
r
;


 
 
e
n
a
b
l
e
d
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
 
b
o
o
l
e
a
n
>
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


 
 
c
o
n
s
t
 
W
 
=
 
5
6
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


 
 
c
o
n
s
t
 
P
A
D
 
=
 
3
8
;


 
 
c
o
n
s
t
 
y
M
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
C
U
R
V
E
S
.
f
i
l
t
e
r
(
(
c
)
 
=
>
 
e
n
a
b
l
e
d
[
c
.
i
d
]
)
.
m
a
p
(
(
c
)
 
=
>
 
M
a
t
h
.
l
o
g
1
0
(
c
.
f
(
n
M
a
x
)
 
+
 
1
)
)
,


 
 
)
;


 
 
c
o
n
s
t
 
y
S
c
a
l
e
 
=
 
(
y
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


 
 
 
 
H
 
-
 
P
A
D
 
-
 
(
M
a
t
h
.
l
o
g
1
0
(
y
 
+
 
1
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
0
.
0
0
0
1
,
 
y
M
a
x
)
)
 
*
 
(
H
 
-
 
P
A
D
 
*
 
2
)
;


 
 
c
o
n
s
t
 
x
S
c
a
l
e
 
=
 
(
x
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
 
P
A
D
 
+
 
(
x
 
/
 
n
M
a
x
)
 
*
 
(
W
 
-
 
P
A
D
 
*
 
2
)
;


 
 
c
o
n
s
t
 
s
a
m
p
l
e
s
 
=
 
6
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


 
 
 
 
 
 
 
 
p
r
e
s
e
r
v
e
A
s
p
e
c
t
R
a
t
i
o
=
"
x
M
i
d
Y
M
i
d
 
m
e
e
t
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
[
0
,
 
0
.
2
5
,
 
0
.
5
,
 
0
.
7
5
,
 
1
]
.
m
a
p
(
(
t
,
 
i
)
 
=
>
 
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
g
x
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
P
A
D
}


 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
P
A
D
 
+
 
t
 
*
 
(
H
 
-
 
P
A
D
 
*
 
2
)
}


 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
W
 
-
 
P
A
D
}


 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
P
A
D
 
+
 
t
 
*
 
(
H
 
-
 
P
A
D
 
*
 
2
)
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
e
7
e
5
e
4
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
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
{
[
0
,
 
0
.
2
5
,
 
0
.
5
,
 
0
.
7
5
,
 
1
]
.
m
a
p
(
(
t
,
 
i
)
 
=
>
 
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
g
y
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
P
A
D
 
+
 
t
 
*
 
(
W
 
-
 
P
A
D
 
*
 
2
)
}


 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
P
A
D
}


 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
P
A
D
 
+
 
t
 
*
 
(
W
 
-
 
P
A
D
 
*
 
2
)
}


 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
H
 
-
 
P
A
D
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
e
7
e
5
e
4
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
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
P
A
D
}
 
y
1
=
{
H
 
-
 
P
A
D
}
 
x
2
=
{
W
 
-
 
P
A
D
}
 
y
2
=
{
H
 
-
 
P
A
D
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
7
8
7
1
6
c
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
4
}
 
/
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
P
A
D
}
 
y
1
=
{
P
A
D
}
 
x
2
=
{
P
A
D
}
 
y
2
=
{
H
 
-
 
P
A
D
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
7
8
7
1
6
c
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
4
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
W
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
y
=
{
H
 
-
 
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
1
1
"


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
#
5
7
5
3
4
e
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
"
u
i
-
s
a
n
s
-
s
e
r
i
f
,
 
s
y
s
t
e
m
-
u
i
,
 
s
a
n
s
-
s
e
r
i
f
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
i
n
p
u
t
 
s
i
z
e
 
n
 
(
1
 
…
 
{
n
M
a
x
}
)


 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
<
t
e
x
t


 
 
 
 
 
 
 
 
 
 
x
=
{
1
2
}


 
 
 
 
 
 
 
 
 
 
y
=
{
H
 
/
 
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
i
l
l
=
"
#
5
7
5
3
4
e
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
"
u
i
-
s
a
n
s
-
s
e
r
i
f
,
 
s
y
s
t
e
m
-
u
i
,
 
s
a
n
s
-
s
e
r
i
f
"


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
f
o
r
m
=
{
`
r
o
t
a
t
e
(
-
9
0
 
1
2
 
$
{
H
 
/
 
2
}
)
`
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
o
p
e
r
a
t
i
o
n
s
 
(
l
o
g
 
s
c
a
l
e
)


 
 
 
 
 
 
 
 
<
/
t
e
x
t
>




 
 
 
 
 
 
 
 
{
C
U
R
V
E
S
.
f
i
l
t
e
r
(
(
c
)
 
=
>
 
e
n
a
b
l
e
d
[
c
.
i
d
]
)
.
m
a
p
(
(
c
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
t
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
 
i
 
=
 
0
;
 
i
 
<
=
 
s
a
m
p
l
e
s
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
 
n
 
=
 
1
 
+
 
(
n
M
a
x
 
-
 
1
)
 
*
 
(
i
 
/
 
s
a
m
p
l
e
s
)
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
c
.
f
(
n
)
;


 
 
 
 
 
 
 
 
 
 
 
 
p
t
s
.
p
u
s
h
(
`
$
{
x
S
c
a
l
e
(
n
)
.
t
o
F
i
x
e
d
(
1
)
}
,
$
{
y
S
c
a
l
e
(
y
)
.
t
o
F
i
x
e
d
(
1
)
}
`
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
H
i
 
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
 
=
=
=
 
c
.
i
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
p
o
l
y
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
s
=
{
p
t
s
.
j
o
i
n
(
"
 
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
c
o
l
o
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
i
s
H
i
 
?
 
3
.
5
 
:
 
2
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
h
i
g
h
l
i
g
h
t
 
&
&
 
!
i
s
H
i
 
?
 
0
.
3
5
 
:
 
1
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
o
p
a
c
i
t
y
 
0
.
2
5
s
,
 
s
t
r
o
k
e
-
w
i
d
t
h
 
0
.
2
5
s
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
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
 
 
L
o
o
p
 
a
n
a
l
y
z
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
 
L
o
o
p
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
 
b
o
o
l
e
a
n
 
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


 
 
o
p
s
:
 
n
u
m
b
e
r
;


 
 
a
c
t
i
v
e
C
u
r
v
e
:
 
s
t
r
i
n
g
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
 
L
o
o
p
P
r
e
s
e
t
 
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
s
e
u
d
o
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


 
 
b
i
g
O
:
 
s
t
r
i
n
g
;


 
 
b
u
i
l
d
:
 
(
n
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
 
L
o
o
p
F
r
a
m
e
[
]
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
S
i
n
g
l
e
(
n
:
 
n
u
m
b
e
r
)
:
 
L
o
o
p
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
 
L
o
o
p
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
 
n
,
 
o
p
s
:
 
0
 
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
 
a
 
s
i
n
g
l
e
 
l
o
o
p
 
o
v
e
r
 
n
 
=
 
$
{
n
}
.
`
,
 
o
p
s
:
 
0
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
n
"
 
}
)
;


 
 
l
e
t
 
o
p
s
 
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
p
 
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
n
,
 
1
0
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
 
c
a
p
;
 
i
+
+
)
 
{


 
 
 
 
o
p
s
+
+
;


 
 
 
 
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
 
1
,
 
v
a
r
s
:
 
{
 
n
,
 
i
,
 
o
p
s
 
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
I
t
e
r
a
t
i
o
n
 
$
{
i
 
+
 
1
}
:
 
o
n
e
 
u
n
i
t
 
o
f
 
w
o
r
k
.
`
,
 
o
p
s
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
n
"
 
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
 
n
,
 
o
p
s
:
 
n
 
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
T
o
t
a
l
 
$
{
n
}
 
i
t
e
r
a
t
i
o
n
s
 
→
 
w
o
r
k
 
g
r
o
w
s
 
l
i
n
e
a
r
l
y
.
 
T
h
a
t
 
i
s
 
O
(
n
)
.
`
,
 
o
p
s
:
 
n
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
n
"
 
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
N
e
s
t
e
d
(
n
:
 
n
u
m
b
e
r
)
:
 
L
o
o
p
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
 
L
o
o
p
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
 
n
,
 
o
p
s
:
 
0
 
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
T
w
o
 
n
e
s
t
e
d
 
l
o
o
p
s
,
 
e
a
c
h
 
u
p
 
t
o
 
n
.
`
,
 
o
p
s
:
 
0
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
n
2
"
 
}
)
;


 
 
l
e
t
 
o
p
s
 
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
p
 
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
n
,
 
5
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
 
c
a
p
;
 
i
+
+
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
 
1
,
 
v
a
r
s
:
 
{
 
n
,
 
i
,
 
o
p
s
 
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
O
u
t
e
r
 
s
t
e
p
 
i
 
=
 
$
{
i
}
.
 
I
n
n
e
r
 
l
o
o
p
 
w
i
l
l
 
a
l
s
o
 
r
u
n
 
n
 
t
i
m
e
s
.
`
,
 
o
p
s
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
n
2
"
 
}
)
;


 
 
 
 
f
o
r
 
(
l
e
t
 
j
 
=
 
0
;
 
j
 
<
 
c
a
p
;
 
j
+
+
)
 
{


 
 
 
 
 
 
o
p
s
+
+
;


 
 
 
 
 
 
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
 
2
,
 
v
a
r
s
:
 
{
 
n
,
 
i
,
 
j
,
 
o
p
s
 
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
I
n
n
e
r
 
s
t
e
p
 
j
 
=
 
$
{
j
}
.
 
E
v
e
r
y
 
o
u
t
e
r
 
s
t
e
p
 
c
o
s
t
s
 
n
 
i
n
n
e
r
 
s
t
e
p
s
.
`
,
 
o
p
s
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
n
2
"
 
}
)
;


 
 
 
 
}


 
 
}


 
 
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
 
3
,
 
v
a
r
s
:
 
{
 
n
,
 
o
p
s
:
 
n
 
*
 
n
 
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
T
o
t
a
l
 
≈
 
n
 
×
 
n
 
=
 
n
²
 
o
p
e
r
a
t
i
o
n
s
 
→
 
O
(
n
²
)
.
`
,
 
o
p
s
:
 
n
 
*
 
n
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
n
2
"
 
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
L
o
g
(
n
:
 
n
u
m
b
e
r
)
:
 
L
o
o
p
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
 
L
o
o
p
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
 
n
,
 
o
p
s
:
 
0
 
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
H
a
l
v
i
n
g
 
l
o
o
p
:
 
i
 
d
o
u
b
l
e
s
 
e
a
c
h
 
s
t
e
p
.
`
,
 
o
p
s
:
 
0
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
l
o
g
"
 
}
)
;


 
 
l
e
t
 
o
p
s
 
=
 
0
;


 
 
l
e
t
 
i
 
=
 
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
 
n
)
 
{


 
 
 
 
o
p
s
+
+
;


 
 
 
 
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
 
1
,
 
v
a
r
s
:
 
{
 
n
,
 
i
,
 
o
p
s
 
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
i
 
=
 
$
{
i
}
.
 
N
e
x
t
 
i
t
e
r
a
t
i
o
n
 
w
i
l
l
 
d
o
u
b
l
e
 
i
t
.
`
,
 
o
p
s
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
l
o
g
"
 
}
)
;


 
 
 
 
i
 
*
=
 
2
;


 
 
}


 
 
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
1
,
 
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
M
a
t
h
.
l
o
g
2
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
2
,
 
n
)
)
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
 
n
,
 
o
p
s
:
 
t
o
t
a
l
 
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
O
n
l
y
 
a
b
o
u
t
 
l
o
g
₂
(
n
)
 
≈
 
$
{
t
o
t
a
l
}
 
i
t
e
r
a
t
i
o
n
s
 
→
 
O
(
l
o
g
 
n
)
.
`
,
 
o
p
s
:
 
t
o
t
a
l
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
l
o
g
"
 
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
N
L
o
g
N
(
n
:
 
n
u
m
b
e
r
)
:
 
L
o
o
p
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
 
L
o
o
p
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
 
n
,
 
o
p
s
:
 
0
 
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
O
u
t
e
r
 
l
i
n
e
a
r
 
l
o
o
p
;
 
i
n
n
e
r
 
d
o
u
b
l
i
n
g
 
l
o
o
p
.
`
,
 
o
p
s
:
 
0
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
n
l
n
"
 
}
)
;


 
 
l
e
t
 
o
p
s
 
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
p
 
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
n
,
 
4
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
 
c
a
p
;
 
i
+
+
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
 
1
,
 
v
a
r
s
:
 
{
 
n
,
 
i
,
 
o
p
s
 
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
O
u
t
e
r
 
i
 
=
 
$
{
i
}
.
 
I
n
n
e
r
 
r
u
n
s
 
l
o
g
(
n
)
 
t
i
m
e
s
.
`
,
 
o
p
s
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
n
l
n
"
 
}
)
;


 
 
 
 
l
e
t
 
j
 
=
 
1
;


 
 
 
 
w
h
i
l
e
 
(
j
 
<
 
n
)
 
{


 
 
 
 
 
 
o
p
s
+
+
;


 
 
 
 
 
 
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
 
2
,
 
v
a
r
s
:
 
{
 
n
,
 
i
,
 
j
,
 
o
p
s
 
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
I
n
n
e
r
 
j
 
=
 
$
{
j
}
,
 
t
h
e
n
 
d
o
u
b
l
e
s
.
`
,
 
o
p
s
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
n
l
n
"
 
}
)
;


 
 
 
 
 
 
j
 
*
=
 
2
;


 
 
 
 
}


 
 
}


 
 
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
n
 
*
 
M
a
t
h
.
l
o
g
2
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
2
,
 
n
)
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
 
n
,
 
o
p
s
:
 
t
o
t
a
l
 
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
T
o
t
a
l
 
≈
 
n
 
·
 
l
o
g
₂
(
n
)
 
o
p
e
r
a
t
i
o
n
s
 
→
 
O
(
n
 
l
o
g
 
n
)
.
`
,
 
o
p
s
:
 
t
o
t
a
l
,
 
a
c
t
i
v
e
C
u
r
v
e
:
 
"
c
n
l
n
"
 
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
 
P
R
E
S
E
T
S
:
 
L
o
o
p
P
r
e
s
e
t
[
]
 
=
 
[


 
 
{
 
i
d
:
 
"
s
i
n
g
l
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
S
i
n
g
l
e
 
l
o
o
p
"
,
 
p
s
e
u
d
o
:
 
[
"
f
o
r
 
i
 
i
n
 
0
.
.
n
:
"
,
 
"
 
 
w
o
r
k
(
)
"
,
 
"
#
 
d
o
n
e
"
]
,
 
b
i
g
O
:
 
"
O
(
n
)
"
,
 
b
u
i
l
d
:
 
b
u
i
l
d
S
i
n
g
l
e
 
}
,


 
 
{
 
i
d
:
 
"
n
e
s
t
e
d
"
,
 
l
a
b
e
l
:
 
"
N
e
s
t
e
d
 
l
o
o
p
s
"
,
 
p
s
e
u
d
o
:
 
[
"
f
o
r
 
i
 
i
n
 
0
.
.
n
:
"
,
 
"
 
 
f
o
r
 
j
 
i
n
 
0
.
.
n
:
"
,
 
"
 
 
 
 
w
o
r
k
(
)
"
,
 
"
#
 
d
o
n
e
"
]
,
 
b
i
g
O
:
 
"
O
(
n
²
)
"
,
 
b
u
i
l
d
:
 
b
u
i
l
d
N
e
s
t
e
d
 
}
,


 
 
{
 
i
d
:
 
"
l
o
g
"
,
 
l
a
b
e
l
:
 
"
H
a
l
v
i
n
g
 
l
o
o
p
"
,
 
p
s
e
u
d
o
:
 
[
"
i
 
←
 
1
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
 
n
:
"
,
 
"
 
 
i
 
←
 
i
 
*
 
2
"
,
 
"
#
 
d
o
n
e
"
]
,
 
b
i
g
O
:
 
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
 
b
u
i
l
d
:
 
b
u
i
l
d
L
o
g
 
}
,


 
 
{
 
i
d
:
 
"
n
l
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
i
n
e
a
r
 
×
 
l
o
g
"
,
 
p
s
e
u
d
o
:
 
[
"
f
o
r
 
i
 
i
n
 
0
.
.
n
:
"
,
 
"
 
 
j
 
←
 
1
"
,
 
"
 
 
w
h
i
l
e
 
j
 
<
 
n
:
 
j
 
←
 
j
 
*
 
2
"
,
 
"
#
 
d
o
n
e
"
]
,
 
b
i
g
O
:
 
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
 
b
u
i
l
d
:
 
b
u
i
l
d
N
L
o
g
N
 
}
,


]
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
n
,
 
s
e
t
N
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
0
)
;


 
 
c
o
n
s
t
 
[
p
r
e
s
e
t
I
d
,
 
s
e
t
P
r
e
s
e
t
I
d
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
n
e
s
t
e
d
"
)
;


 
 
c
o
n
s
t
 
[
e
n
a
b
l
e
d
,
 
s
e
t
E
n
a
b
l
e
d
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
 
b
o
o
l
e
a
n
>
>
(
{


 
 
 
 
c
1
:
 
t
r
u
e
,
 
c
l
o
g
:
 
t
r
u
e
,
 
c
n
:
 
t
r
u
e
,
 
c
n
l
n
:
 
t
r
u
e
,
 
c
n
2
:
 
t
r
u
e
,
 
c
2
n
:
 
t
r
u
e
,
 
c
f
a
c
t
:
 
f
a
l
s
e
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
2
0
"
)
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
 
=
 
P
R
E
S
E
T
S
.
f
i
n
d
(
(
p
)
 
=
>
 
p
.
i
d
 
=
=
=
 
p
r
e
s
e
t
I
d
)
 
?
?
 
P
R
E
S
E
T
S
[
0
]
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
 
p
r
e
s
e
t
.
b
u
i
l
d
(
n
)
,
 
[
p
r
e
s
e
t
,
 
n
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
{
`
L
o
o
p
 
A
n
a
l
y
z
e
r
 
→
 
$
{
p
r
e
s
e
t
.
b
i
g
O
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
I
n
p
u
t
 
s
i
z
e
 
n
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
 
2
0
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
i
c
k
 
a
n
 
n
 
t
o
 
t
r
a
c
e
.
 
T
h
e
 
a
n
a
l
y
z
e
r
 
c
a
p
s
 
i
n
n
e
r
 
s
t
e
p
s
 
s
o
 
t
h
e
 
f
r
a
m
e
s
 
s
t
a
y
 
r
e
a
d
a
b
l
e
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
n
 
=
 
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
n
 
=
 
2
0
"
,
 
v
a
l
u
e
:
 
"
2
0
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
n
 
=
 
1
0
0
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
0
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
n
 
=
 
1
0
0
0
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
0
0
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
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
1
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
1
0
0
0
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
N
u
m
b
e
r
(
v
)
 
|
|
 
0
)
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
x
 
>
 
0
)
 
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
(
S
t
r
i
n
g
(
x
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
N
(
x
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
x
 
=
 
1
 
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
 
1
0
0
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
S
t
r
i
n
g
(
x
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
N
(
x
)
;


 
 
 
 
 
 
 
 
 
 
 
 
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
 
l
o
o
p
 
p
a
t
t
e
r
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
P
R
E
S
E
T
S
.
m
a
p
(
(
p
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
=
{
p
r
e
s
e
t
I
d
 
=
=
=
 
p
.
i
d
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
P
r
e
s
e
t
I
d
(
p
.
i
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
l
a
b
e
l
}
 
·
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
"
>
{
p
.
b
i
g
O
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
p
r
e
s
e
t
.
p
s
e
u
d
o
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
[
"
o
p
s
"
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
"
>


 
 
 
 
 
 
 
 
<
G
r
o
w
t
h
P
l
o
t
 
n
M
a
x
=
{
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
0
,
 
n
)
}
 
e
n
a
b
l
e
d
=
{
e
n
a
b
l
e
d
}
 
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
C
u
r
v
e
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
"
>


 
 
 
 
 
 
 
 
 
 
{
C
U
R
V
E
S
.
m
a
p
(
(
c
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
o
n
 
=
 
e
n
a
b
l
e
d
[
c
.
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
c
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
E
n
a
b
l
e
d
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
 
[
c
.
i
d
]
:
 
!
e
[
c
.
i
d
]
 
}
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
{
`
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
5
 
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
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
n
 
?
 
{
 
c
o
l
o
r
:
 
c
.
c
o
l
o
r
 
}
 
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
 
o
n
 
?
 
c
.
c
o
l
o
r
 
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
l
a
b
e
l
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
 
r
o
w
s
 
=
 
[


 
 
 
 
{
 
o
:
 
"
O
(
1
)
"
,
 
n
a
m
e
:
 
"
C
o
n
s
t
a
n
t
"
,
 
e
x
:
 
"
A
r
r
a
y
 
i
n
d
e
x
 
l
o
o
k
u
p
 
a
[
i
]
"
 
}
,


 
 
 
 
{
 
o
:
 
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
 
n
a
m
e
:
 
"
L
o
g
a
r
i
t
h
m
i
c
"
,
 
e
x
:
 
"
B
i
n
a
r
y
 
s
e
a
r
c
h
 
i
n
 
a
 
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
"
 
}
,


 
 
 
 
{
 
o
:
 
"
O
(
n
)
"
,
 
n
a
m
e
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
 
e
x
:
 
"
L
i
n
e
a
r
 
s
e
a
r
c
h
,
 
s
u
m
 
o
f
 
a
n
 
a
r
r
a
y
"
 
}
,


 
 
 
 
{
 
o
:
 
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
 
n
a
m
e
:
 
"
L
i
n
e
a
r
i
t
h
m
i
c
"
,
 
e
x
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
,
 
h
e
a
p
 
s
o
r
t
"
 
}
,


 
 
 
 
{
 
o
:
 
"
O
(
n
²
)
"
,
 
n
a
m
e
:
 
"
Q
u
a
d
r
a
t
i
c
"
,
 
e
x
:
 
"
B
u
b
b
l
e
 
s
o
r
t
,
 
c
h
e
c
k
i
n
g
 
a
l
l
 
p
a
i
r
s
"
 
}
,


 
 
 
 
{
 
o
:
 
"
O
(
2
ⁿ
)
"
,
 
n
a
m
e
:
 
"
E
x
p
o
n
e
n
t
i
a
l
"
,
 
e
x
:
 
"
N
a
i
v
e
 
r
e
c
u
r
s
i
v
e
 
s
u
b
s
e
t
s
,
 
F
i
b
o
n
a
c
c
i
"
 
}
,


 
 
 
 
{
 
o
:
 
"
O
(
n
!
)
"
,
 
n
a
m
e
:
 
"
F
a
c
t
o
r
i
a
l
"
,
 
e
x
:
 
"
G
e
n
e
r
a
t
i
n
g
 
a
l
l
 
p
e
r
m
u
t
a
t
i
o
n
s
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
w
h
y
 
b
i
g
-
o
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
H
o
w
 
f
a
s
t
 
d
o
e
s
 
w
o
r
k
 
g
r
o
w
 
a
s
 
n
 
g
r
o
w
s
?
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
i
g
-
O
 
d
e
s
c
r
i
b
e
s
 
h
o
w
 
t
h
e
 
n
u
m
b
e
r
 
o
f
 
o
p
e
r
a
t
i
o
n
s
 
g
r
o
w
s
 
a
s
 
t
h
e
 
i
n
p
u
t
 
s
i
z
e
 
n
 
g
r
o
w
s
.
 
W
e
 
i
g
n
o
r
e


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
a
n
t
s
 
a
n
d
 
l
o
w
e
r
-
o
r
d
e
r
 
t
e
r
m
s
 
a
n
d
 
k
e
e
p
 
o
n
l
y
 
t
h
e
 
d
o
m
i
n
a
n
t
 
t
e
r
m
,
 
b
e
c
a
u
s
e
 
f
o
r
 
l
a
r
g
e
 
n
 
t
h
a
t


 
 
 
 
 
 
 
 
 
 
t
e
r
m
 
s
w
a
l
l
o
w
s
 
e
v
e
r
y
t
h
i
n
g
 
e
l
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
C
a
r
d
 
p
a
d
d
e
d
=
{
f
a
l
s
e
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
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
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
B
i
g
-
O
"
,
 
"
N
a
m
e
"
,
 
"
T
y
p
i
c
a
l
 
e
x
a
m
p
l
e
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
4
 
p
y
-
3
 
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
r
o
w
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
t
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
r
.
o
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
 
=
=
=
 
0
 
?
 
"
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
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
4
 
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
.
o
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
4
 
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
"
>
{
r
.
n
a
m
e
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
4
 
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
{
r
.
e
x
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
r
e
e
 
r
u
l
e
s
 
y
o
u
 
w
i
l
l
 
u
s
e
 
e
v
e
r
y
 
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
o
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
e
c
i
m
a
l
 
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
D
r
o
p
 
c
o
n
s
t
a
n
t
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
 
3
n
 
+
 
7
 
→


 
 
 
 
 
 
 
 
 
 
 
 
O
(
n
)
.
 
A
 
c
o
n
s
t
a
n
t
 
c
o
e
f
f
i
c
i
e
n
t
 
n
e
v
e
r
 
c
h
a
n
g
e
s
 
t
h
e
 
c
l
a
s
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
D
r
o
p
 
l
o
w
e
r
-
o
r
d
e
r
 
t
e
r
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
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
n
²
 
+
 
n
 
+
 
1
0
0
 
→
 
O
(
n
²
)
.
 
T
h
e
 
b
i
g
g
e
s
t
 
t
e
r
m
 
w
i
n
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
N
e
s
t
e
d
 
l
o
o
p
s
 
m
u
l
t
i
p
l
y
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
 
a


 
 
 
 
 
 
 
 
 
 
 
 
l
o
o
p
 
r
u
n
n
i
n
g
 
m
 
t
i
m
e
s
 
i
n
s
i
d
e
 
o
n
e
 
r
u
n
n
i
n
g
 
n
 
t
i
m
e
s
 
i
s
 
O
(
n
·
m
)
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
o
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


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
f
o
r
 
i
 
i
n
 
0
.
.
n
:
\
n
 
 
f
o
r
 
j
 
i
n
 
0
.
.
n
:
\
n
 
 
 
 
x
 
+
=
 
1
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
n
 
l
o
g
 
n
)
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:
 
"
T
w
o
 
n
e
s
t
e
d
 
l
o
o
p
s
 
e
a
c
h
 
o
f
 
l
e
n
g
t
h
 
n
 
m
u
l
t
i
p
l
y
 
→
 
n
 
×
 
n
 
=
 
n
²
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
i
 
←
 
1
\
n
w
h
i
l
e
 
i
 
<
 
n
:
\
n
 
 
i
 
←
 
i
 
*
 
2
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
1
)
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:
 
"
D
o
u
b
l
i
n
g
 
i
 
h
a
l
v
e
s
 
t
h
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
 
w
o
r
k
 
e
a
c
h
 
s
t
e
p
 
→
 
l
o
g
₂
(
n
)
 
s
t
e
p
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
f
o
r
 
i
 
i
n
 
0
.
.
n
:
\
n
 
 
s
u
m
 
+
=
 
a
[
i
]
\
n
f
o
r
 
j
 
i
n
 
0
.
.
n
:
\
n
 
 
c
n
t
 
+
=
 
1
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
²
)
"
,
 
"
O
(
2
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
l
o
g
 
n
)
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:
 
"
T
w
o
 
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
 
l
o
o
p
s
 
o
f
 
l
e
n
g
t
h
 
n
 
a
d
d
:
 
2
n
 
→
 
d
r
o
p
p
i
n
g
 
c
o
n
s
t
a
n
t
s
 
g
i
v
e
s
 
O
(
n
)
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
f
o
r
 
i
 
i
n
 
0
.
.
n
:
\
n
 
 
j
 
←
 
1
\
n
 
 
w
h
i
l
e
 
j
 
<
 
n
:
 
j
 
←
 
j
 
*
 
2
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
²
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
l
o
g
 
n
)
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:
 
"
L
i
n
e
a
r
 
o
u
t
e
r
 
×
 
l
o
g
-
i
n
n
e
r
 
→
 
n
 
·
 
l
o
g
 
n
.
"
,


 
 
 
 
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
p
i
c
k
e
d
,
 
s
e
t
P
i
c
k
e
d
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
n
u
m
b
e
r
 
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


 
 
 
 
 
 
 
 
C
l
a
s
s
i
f
y
 
e
a
c
h
 
s
n
i
p
p
e
t
.
 
N
u
m
b
e
r
s
 
a
r
e
 
i
g
n
o
r
e
d
,
 
l
o
o
p
s
 
a
r
e
 
c
o
u
n
t
e
d
.
 
C
l
i
c
k
 
a
n
 
o
p
t
i
o
n
,
 
t
h
e
n
 
r
e
a
d


 
 
 
 
 
 
 
 
t
h
e
 
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
 
t
h
a
t
 
a
p
p
e
a
r
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
 
s
e
l
 
=
 
p
i
c
k
e
d
[
i
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
C
o
d
e
B
l
o
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
m
b
-
3
"
>
{
p
.
s
n
i
p
p
e
t
}
<
/
C
o
d
e
B
l
o
c
k
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
o
p
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
o
,
 
i
d
x
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
o
r
r
e
c
t
 
=
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
w
r
o
n
g
 
=
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
=
=
=
 
s
e
l
 
&
&
 
i
d
x
 
!
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
i
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
p
i
c
k
e
d
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
[
i
]
 
=
 
i
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
i
c
k
e
d
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
{
`
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
o
r
d
e
r
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
w
r
o
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
r
o
s
e
-
2
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
4
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
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


 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
 
!
=
=
 
n
u
l
l
 
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
t
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
{
p
.
e
x
p
l
a
i
n
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


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
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
T
h
e
 
f
o
r
m
a
l
 
d
e
f
i
n
i
t
i
o
n
 
(
t
h
e
 
o
n
e
 
i
n
 
t
h
e
 
t
e
x
t
b
o
o
k
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
2
"
>


 
 
 
 
 
 
 
 
 
 
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
f
(
n
)
 
∈
 
O
(
g
(
n
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
 
i
f
f
 
t
h
e
r
e
 
e
x
i
s
t
 
c
o
n
s
t
a
n
t
s
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
 
&
g
t
;
 
0
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
 
a
n
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
n
₀
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
 
s
u
c
h
 
t
h
a
t
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
0
 
≤
 
f
(
n
)
 
≤
 
c
 
·
 
g
(
n
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
 
f
o
r
 
a
l
l
 
<
e
m
>
n
 
≥
 
n
₀
<
/
e
m
>
.


 
 
 
 
 
 
 
 
<
/
p
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
2
"
>


 
 
 
 
 
 
 
 
 
 
P
l
a
i
n
 
E
n
g
l
i
s
h
:
 
f
r
o
m
 
s
o
m
e
 
p
o
i
n
t
 
o
n
w
a
r
d
,
 
<
e
m
>
f
<
/
e
m
>
 
i
s
 
a
t
 
m
o
s
t
 
a
 
c
o
n
s
t
a
n
t
 
m
u
l
t
i
p
l
e
 
o
f
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
e
m
>
g
<
/
e
m
>
.
 
T
h
a
t
 
i
s
 
w
h
y
 
c
o
n
s
t
a
n
t
s
 
a
n
d
 
l
o
w
e
r
-
o
r
d
e
r
 
t
e
r
m
s
 
c
a
n
 
b
e
 
d
r
o
p
p
e
d
,
 
t
h
e
y
 
g
e
t
 
a
b
s
o
r
b
e
d


 
 
 
 
 
 
 
 
 
 
b
y
 
<
e
m
>
c
<
/
e
m
>
 
f
o
r
 
l
a
r
g
e
 
e
n
o
u
g
h
 
<
e
m
>
n
<
/
e
m
>
.


 
 
 
 
 
 
 
 
<
/
p
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
W
o
r
k
e
d
 
e
x
a
m
p
l
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
 
s
h
o
w
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
3
n
 
+
 
7
 
∈
 
O
(
n
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
 
P
i
c
k
 
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
 
=
 
4
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
,
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
n
₀
 
=
 
7
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
 
F
o
r
 
n
 
≥
 
7
:
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
3
n
 
+
 
7
 
≤
 
3
n
 
+
 
n
 
=
 
4
n
 
=
 
c
·
n
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
 
∎


 
 
 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
 
 
C
o
u
s
i
n
s
:
 
<
s
t
r
o
n
g
>
Ω
(
g
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
 
=
 
a
t
 
l
e
a
s
t
 
c
·
g
 
e
v
e
n
t
u
a
l
l
y
 
(
l
o
w
e
r
 
b
o
u
n
d
)
.
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
Θ
(
g
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
 
=
 
b
o
t
h
 
O
 
a
n
d
 
Ω
 
(
t
i
g
h
t
)
.
 
M
o
s
t
 
C
S
 
c
o
u
r
s
e
s
 
s
a
y
 
"
O
"
 
w
h
e
n
 
t
h
e
y
 
m
e
a
n
 
Θ
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
A
m
o
r
t
i
z
e
d
 
a
n
a
l
y
s
i
s
:
 
d
y
n
a
m
i
c
 
a
r
r
a
y
 
d
o
u
b
l
i
n
g
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
2
"
>


 
 
 
 
 
 
 
 
 
 
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
l
i
s
t
.
a
p
p
e
n
d
(
x
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
 
i
n
 
P
y
t
h
o
n
 
(
o
r
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
A
r
r
a
y
L
i
s
t
.
a
d
d
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
 
i
n
 
J
a
v
a
)
 
i
s
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
a
m
o
r
t
i
z
e
d
 
O
(
1
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
,
 
n
o
t


 
 
 
 
 
 
 
 
 
 
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
.
 
S
o
m
e
t
i
m
e
s
 
a
 
s
i
n
g
l
e
 
a
p
p
e
n
d
 
i
s
 
O
(
n
)
 
(
w
h
e
n
 
t
h
e
 
a
r
r
a
y
 
i
s
 
f
u
l
l
 
a
n
d
 
m
u
s
t
 
b
e
 
c
o
p
i
e
d


 
 
 
 
 
 
 
 
 
 
t
o
 
a
 
n
e
w
 
l
a
r
g
e
r
 
o
n
e
)
.
 
B
u
t
 
t
h
e
 
<
e
m
>
a
v
e
r
a
g
e
 
o
v
e
r
 
a
 
l
o
n
g
 
s
e
q
u
e
n
c
e
<
/
e
m
>
 
i
s
 
O
(
1
)
.


 
 
 
 
 
 
 
 
<
/
p
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
2
"
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
A
g
g
r
e
g
a
t
e
 
p
r
o
o
f
.
<
/
s
t
r
o
n
g
>
 
I
n
s
e
r
t
 
n


 
 
 
 
 
 
 
 
 
 
i
t
e
m
s
,
 
d
o
u
b
l
i
n
g
 
c
a
p
a
c
i
t
y
 
a
t
 
1
,
 
2
,
 
4
,
 
8
,
 
…
,
 
n
/
2
.
 
T
o
t
a
l
 
c
o
p
y
 
w
o
r
k
 
a
c
r
o
s
s
 
r
e
s
i
z
e
s
:


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
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
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
1
 
+
 
2
 
+
 
4
 
+
 
8
 
+
 
.
.
.
 
+
 
n
/
2
 
+
 
n
 
 
=
 
 
2
n
 
-
 
1
 
 
&
l
t
;
 
 
2
n
 
 
 
(
g
e
o
m
e
t
r
i
c
 
s
u
m
)


 
 
 
 
 
 
 
 
<
/
C
o
d
e
B
l
o
c
k
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
2
"
>


 
 
 
 
 
 
 
 
 
 
P
l
u
s
 
n
 
o
n
e
-
s
t
e
p
 
w
r
i
t
e
s
.
 
T
o
t
a
l
 
w
o
r
k
 
≤
 
3
n
.
 
D
i
s
t
r
i
b
u
t
e
d
 
o
v
e
r
 
n
 
a
p
p
e
n
d
s
 
→
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
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
O
(
1
)
 
a
m
o
r
t
i
z
e
d
 
p
e
r
 
a
p
p
e
n
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
.


 
 
 
 
 
 
 
 
<
/
p
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
A
c
c
o
u
n
t
i
n
g
 
v
i
e
w
.
<
/
s
t
r
o
n
g
>
 
C
h
a
r
g
e


 
 
 
 
 
 
 
 
 
 
e
a
c
h
 
c
h
e
a
p
 
a
p
p
e
n
d
 
a
 
b
u
d
g
e
t
 
o
f
 
3
 
(
1
 
f
o
r
 
t
h
e
 
a
c
t
u
a
l
 
w
r
i
t
e
,
 
2
 
s
a
v
e
d
 
a
s
 
"
c
r
e
d
i
t
"
)
.
 
W
h
e
n
 
a


 
 
 
 
 
 
 
 
 
 
r
e
s
i
z
e
 
h
a
p
p
e
n
s
,
 
e
v
e
r
y
 
d
o
u
b
l
e
d
-
o
u
t
 
s
l
o
t
 
a
l
r
e
a
d
y
 
p
a
i
d
 
2
 
c
r
e
d
i
t
s
,
 
e
x
a
c
t
l
y
 
e
n
o
u
g
h
 
t
o
 
c
o
v
e
r
 
t
h
e


 
 
 
 
 
 
 
 
 
 
c
o
p
y
.
 
T
h
e
 
b
a
n
k
 
i
s
 
n
e
v
e
r
 
o
v
e
r
d
r
a
w
n
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
P
r
a
c
t
i
c
a
l
 
N
-
t
h
r
e
s
h
o
l
d
s
 
(
i
n
t
e
r
v
i
e
w
 
h
e
u
r
i
s
t
i
c
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
 
m
o
d
e
r
n
 
h
a
r
d
w
a
r
e
,
 
~
1
0
⁸
 
s
i
m
p
l
e
 
o
p
e
r
a
t
i
o
n
s
 
≈
 
1
 
s
e
c
o
n
d
 
w
a
l
l
 
t
i
m
e
.
 
U
s
e
 
t
h
i
s
 
t
o
 
p
i
c
k


 
 
 
 
 
 
 
 
 
 
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
 
b
y
 
i
n
p
u
t
 
b
o
u
n
d
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
n
 
b
o
u
n
d
"
,
 
"
A
c
c
e
p
t
a
b
l
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
"
,
 
"
T
y
p
i
c
a
l
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
:
 
"
n
 
≤
 
1
2
"
,
 
c
:
 
"
O
(
n
!
)
"
,
 
a
:
 
"
p
e
r
m
u
t
a
t
i
o
n
 
e
n
u
m
e
r
a
t
i
o
n
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
:
 
"
n
 
≤
 
2
5
"
,
 
c
:
 
"
O
(
2
ⁿ
)
"
,
 
a
:
 
"
b
i
t
m
a
s
k
 
D
P
,
 
s
u
b
s
e
t
 
e
n
u
m
e
r
a
t
i
o
n
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
:
 
"
n
 
≤
 
5
0
0
"
,
 
c
:
 
"
O
(
n
³
)
"
,
 
a
:
 
"
F
l
o
y
d
-
W
a
r
s
h
a
l
l
,
 
M
C
M
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
:
 
"
n
 
≤
 
5
,
0
0
0
"
,
 
c
:
 
"
O
(
n
²
)
"
,
 
a
:
 
"
D
P
-
2
D
,
 
a
l
l
-
p
a
i
r
s
 
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
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
:
 
"
n
 
≤
 
1
0
⁶
"
,
 
c
:
 
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
 
a
:
 
"
s
o
r
t
i
n
g
,
 
d
i
v
i
d
e
 
&
 
c
o
n
q
u
e
r
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
:
 
"
n
 
≤
 
1
0
⁸
"
,
 
c
:
 
"
O
(
n
)
 
/
 
O
(
n
 
l
o
g
 
l
o
g
 
n
)
"
,
 
a
:
 
"
l
i
n
e
a
r
 
s
c
a
n
,
 
s
i
e
v
e
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
r
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
r
.
n
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
"
>
{
r
.
n
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
"
>
{
r
.
c
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
{
r
.
a
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


 
 
 
 
 
 
 
 
 
 
W
h
e
n
 
t
h
e
 
p
r
o
b
l
e
m
 
s
t
a
t
e
m
e
n
t
 
b
o
u
n
d
s
 
<
e
m
>
n
<
/
e
m
>
,
 
t
h
i
s
 
t
a
b
l
e
 
t
e
l
l
s
 
y
o
u
 
t
h
e
 
t
a
r
g
e
t
 
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


 
 
 
 
 
 
 
 
 
 
b
e
f
o
r
e
 
w
r
i
t
i
n
g
 
a
 
l
i
n
e
 
o
f
 
c
o
d
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
A
s
y
m
p
t
o
t
i
c
 
v
s
 
a
c
t
u
a
l
 
t
i
m
e
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
i
g
-
O
 
i
s
 
a
b
o
u
t
 
<
e
m
>
g
r
o
w
t
h
 
r
a
t
e
<
/
e
m
>
,
 
n
o
t
 
w
a
l
l
-
c
l
o
c
k
 
t
i
m
e
.
 
A
n
 
O
(
n
²
)
 
a
l
g
o
r
i
t
h
m
 
c
a
n
 
b
e
a
t
 
a
n


 
 
 
 
 
 
 
 
 
 
O
(
n
 
l
o
g
 
n
)
 
o
n
e
 
o
n
 
t
i
n
y
 
i
n
p
u
t
s
 
(
c
o
n
s
t
a
n
t
s
 
a
n
d
 
c
a
c
h
e
 
e
f
f
e
c
t
s
 
d
o
m
i
n
a
t
e
)
.
 
T
h
e
 
p
r
o
m
i
s
e
 
o
f
 
B
i
g
-
O


 
 
 
 
 
 
 
 
 
 
k
i
c
k
s
 
i
n
 
w
h
e
n
 
n
 
i
s
 
l
a
r
g
e
,
 
w
h
i
c
h
 
i
s
 
e
x
a
c
t
l
y
 
w
h
e
n
 
p
e
r
f
o
r
m
a
n
c
e
 
m
a
t
t
e
r
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
e
s
t
 
/
 
A
v
e
r
a
g
e
 
/
 
W
o
r
s
t
 
c
a
s
e
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


 
 
 
 
 
 
 
 
 
 
Q
u
i
c
k
 
s
o
r
t
 
i
s
 
O
(
n
 
l
o
g
 
n
)
 
o
n
 
a
v
e
r
a
g
e
 
b
u
t
 
O
(
n
²
)
 
o
n
 
a
n
 
a
l
r
e
a
d
y
-
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
 
w
i
t
h
 
a


 
 
 
 
 
 
 
 
 
 
f
i
x
e
d
-
p
i
v
o
t
.
 
I
n
t
e
r
v
i
e
w
e
r
s
 
u
s
u
a
l
l
y
 
m
e
a
n
 
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
 
B
i
g
-
O
 
u
n
l
e
s
s
 
t
h
e
y
 
s
a
y
 
o
t
h
e
r
w
i
s
e
.
 
A
l
w
a
y
s


 
 
 
 
 
 
 
 
 
 
a
s
k
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
-
s
t
y
l
e
 
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
o
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
e
c
i
m
a
l
 
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
a
d
 
t
h
e
 
c
o
d
e
 
a
n
d
 
i
d
e
n
t
i
f
y
 
t
h
e
 
d
e
e
p
e
s
t
-
n
e
s
t
e
d
 
l
o
o
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
M
u
l
t
i
p
l
y
 
t
h
e
 
c
o
u
n
t
s
 
o
f
 
e
v
e
r
y
 
e
n
c
l
o
s
i
n
g
 
l
o
o
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
I
f
 
a
 
l
o
o
p
 
v
a
r
i
a
b
l
e
 
d
o
u
b
l
e
s
 
/
 
h
a
l
v
e
s
,
 
c
o
u
n
t
 
i
t
 
a
s
 
l
o
g
 
n
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


 
 
 
 
 
 
 
 
 
 
 
 
R
e
c
u
r
s
i
o
n
?
 
W
r
i
t
e
 
t
h
e
 
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
 
(
e
.
g
.
,
 
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
 
→
 
O
(
n
 
l
o
g
 
n
)
 
b
y
 
M
a
s
t
e
r


 
 
 
 
 
 
 
 
 
 
 
 
T
h
e
o
r
e
m
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


 
 
 
 
 
 
 
 
 
 
 
 
M
u
t
a
t
i
n
g
 
d
a
t
a
 
s
t
r
u
c
t
u
r
e
 
(
d
y
n
a
m
i
c
 
a
r
r
a
y
,
 
h
a
s
h
 
t
a
b
l
e
)
?
 
C
h
e
c
k
 
i
f
 
a
m
o
r
t
i
z
e
d
 
a
n
a
l
y
s
i
s
 
c
h
a
n
g
e
s


 
 
 
 
 
 
 
 
 
 
 
 
t
h
e
 
a
n
s
w
e
r
.


 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
o
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
1
_
B
i
g
O
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
W
h
a
t
 
i
s
 
t
h
e
 
t
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
 
t
h
e
 
f
o
l
l
o
w
i
n
g
 
c
o
d
e
?
\
n
\
n
f
o
r
 
i
 
i
n
 
0
.
.
n
:
\
n
 
 
f
o
r
 
j
 
i
n
 
i
.
.
n
:
\
n
 
 
 
 
w
o
r
k
(
)
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
v
e
n
 
t
h
o
u
g
h
 
t
h
e
 
i
n
n
e
r
 
l
o
o
p
 
s
h
r
i
n
k
s
,
 
t
h
e
 
t
o
t
a
l
 
w
o
r
k
 
i
s
 
n
 
+
 
(
n
-
1
)
 
+
 
.
.
.
 
+
 
1
 
=
 
n
(
n
+
1
)
/
2
,
 
w
h
i
c
h
 
i
s
 
O
(
n
²
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
i
c
h
 
e
x
p
r
e
s
s
i
o
n
 
s
i
m
p
l
i
f
i
e
s
 
t
o
 
O
(
n
²
)
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
n
²
 
+
 
5
0
0
n
 
+
 
1
0
0
0
"
,
 
"
n
 
l
o
g
 
n
 
+
 
n
"
,
 
"
2
ⁿ
 
+
 
n
²
"
,
 
"
n
 
+
 
l
o
g
 
n
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
D
r
o
p
 
t
h
e
 
c
o
n
s
t
a
n
t
 
3
 
a
n
d
 
t
h
e
 
l
o
w
e
r
-
o
r
d
e
r
 
t
e
r
m
s
 
5
0
0
n
 
+
 
1
0
0
0
.
 
O
n
l
y
 
n
²
 
s
u
r
v
i
v
e
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
W
h
i
c
h
 
l
o
o
p
 
b
o
d
y
 
g
i
v
e
s
 
O
(
l
o
g
 
n
)
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
f
o
r
 
i
 
i
n
 
0
.
.
n
:
 
.
.
.
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
 
n
:
 
i
 
←
 
i
 
+
 
1
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
 
n
:
 
i
 
←
 
i
 
*
 
2
"
,


 
 
 
 
 
 
 
 
"
f
o
r
 
i
 
i
n
 
0
.
.
n
:
 
f
o
r
 
j
 
i
n
 
0
.
.
n
:
 
.
.
.
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
D
o
u
b
l
i
n
g
 
i
 
e
a
c
h
 
s
t
e
p
 
m
e
a
n
s
 
o
n
l
y
 
l
o
g
₂
(
n
)
 
i
t
e
r
a
t
i
o
n
s
 
b
e
f
o
r
e
 
i
 
r
e
a
c
h
e
s
 
n
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
F
o
r
 
v
e
r
y
 
l
a
r
g
e
 
n
,
 
w
h
i
c
h
 
a
l
g
o
r
i
t
h
m
 
i
s
 
u
n
a
c
c
e
p
t
a
b
l
y
 
s
l
o
w
 
e
v
e
n
 
t
h
o
u
g
h
 
i
t
 
i
s
 
'
c
o
r
r
e
c
t
'
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
2
ⁿ
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
 
3
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
x
p
o
n
e
n
t
i
a
l
 
t
i
m
e
 
e
x
p
l
o
d
e
s
:
 
n
=
4
0
 
a
l
r
e
a
d
y
 
m
e
a
n
s
 
~
1
0
¹
²
 
o
p
e
r
a
t
i
o
n
s
.
 
P
r
a
c
t
i
c
a
l
 
c
o
d
e
 
m
u
s
t
 
a
v
o
i
d
 
O
(
2
ⁿ
)
 
f
o
r
 
l
a
r
g
e
 
i
n
p
u
t
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
W
h
i
c
h
 
s
t
a
t
e
m
e
n
t
 
c
o
r
r
e
c
t
l
y
 
s
t
a
t
e
s
 
t
h
e
 
f
o
r
m
a
l
 
d
e
f
i
n
i
t
i
o
n
 
f
(
n
)
 
∈
 
O
(
g
(
n
)
)
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
f
(
n
)
 
≤
 
g
(
n
)
 
f
o
r
 
a
l
l
 
n
"
,


 
 
 
 
 
 
 
 
"
f
(
n
)
 
=
 
g
(
n
)
 
e
v
e
n
t
u
a
l
l
y
"
,


 
 
 
 
 
 
 
 
"
T
h
e
r
e
 
e
x
i
s
t
 
c
o
n
s
t
a
n
t
s
 
c
 
>
 
0
 
a
n
d
 
n
₀
 
s
u
c
h
 
t
h
a
t
 
0
 
≤
 
f
(
n
)
 
≤
 
c
·
g
(
n
)
 
f
o
r
 
a
l
l
 
n
 
≥
 
n
₀
"
,


 
 
 
 
 
 
 
 
"
f
(
n
)
/
g
(
n
)
 
→
 
1
 
a
s
 
n
 
→
 
∞
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
B
i
g
-
O
 
a
l
l
o
w
s
 
a
 
c
o
n
s
t
a
n
t
 
m
u
l
t
i
p
l
i
e
r
 
a
n
d
 
o
n
l
y
 
r
e
q
u
i
r
e
s
 
t
h
e
 
b
o
u
n
d
 
f
r
o
m
 
s
o
m
e
 
p
o
i
n
t
 
n
₀
 
o
n
w
a
r
d
.
 
T
h
a
t
'
s
 
w
h
y
 
c
o
n
s
t
a
n
t
s
 
a
n
d
 
l
o
w
e
r
-
o
r
d
e
r
 
t
e
r
m
s
 
d
r
o
p
 
o
u
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
I
n
s
e
r
t
i
n
g
 
n
 
i
t
e
m
s
 
i
n
t
o
 
a
 
d
y
n
a
m
i
c
 
a
r
r
a
y
 
(
c
a
p
a
c
i
t
y
 
d
o
u
b
l
e
s
 
w
h
e
n
 
f
u
l
l
)
 
c
o
s
t
s
 
h
o
w
 
m
u
c
h
 
p
e
r
 
o
p
e
r
a
t
i
o
n
,
 
a
m
o
r
t
i
z
e
d
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
 
p
e
r
 
i
n
s
e
r
t
i
o
n
 
(
b
e
c
a
u
s
e
 
o
f
 
t
h
e
 
c
o
p
i
e
s
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
 
p
e
r
 
i
n
s
e
r
t
i
o
n
"
,


 
 
 
 
 
 
 
 
"
O
(
1
)
 
a
m
o
r
t
i
z
e
d
,
 
t
o
t
a
l
 
w
o
r
k
 
i
s
 
b
o
u
n
d
e
d
 
b
y
 
2
n
"
,


 
 
 
 
 
 
 
 
"
O
(
n
²
)
 
t
o
t
a
l
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
R
e
s
i
z
e
 
c
o
p
y
 
w
o
r
k
 
i
s
 
1
+
2
+
4
+
.
.
.
+
n
/
2
 
≤
 
n
 
(
g
e
o
m
e
t
r
i
c
 
s
u
m
)
.
 
D
i
s
t
r
i
b
u
t
e
d
 
o
v
e
r
 
n
 
i
n
s
e
r
t
s
 
→
 
O
(
1
)
 
a
m
o
r
t
i
z
e
d
 
p
e
r
 
i
n
s
e
r
t
.
 
T
h
e
 
s
a
m
e
 
p
r
o
o
f
 
g
i
v
e
s
 
O
(
1
)
 
a
m
o
r
t
i
z
e
d
 
f
o
r
 
h
a
s
h
-
t
a
b
l
e
 
r
e
h
a
s
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
P
r
o
b
l
e
m
 
s
a
y
s
 
1
 
≤
 
n
 
≤
 
5
·
1
0
⁵
 
a
n
d
 
t
i
m
e
 
l
i
m
i
t
 
i
s
 
1
 
s
e
c
o
n
d
.
 
W
h
i
c
h
 
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
 
i
s
 
t
h
e
 
t
i
g
h
t
e
s
t
 
y
o
u
 
c
a
n
 
t
a
r
g
e
t
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
³
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
!
)
 
i
s
 
f
i
n
e
 
f
o
r
 
n
 
t
h
a
t
 
s
m
a
l
l
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
n
=
5
·
1
0
⁵
 
→
 
n
²
 
=
 
2
.
5
·
1
0
¹
¹
 
(
w
a
y
 
t
o
o
 
s
l
o
w
)
,
 
n
 
l
o
g
 
n
 
≈
 
1
0
⁷
 
(
f
i
n
e
)
.
 
U
s
e
 
t
h
e
 
~
1
0
⁸
-
o
p
s
-
p
e
r
-
s
e
c
o
n
d
 
h
e
u
r
i
s
t
i
c
 
t
o
 
p
i
c
k
 
a
 
t
a
r
g
e
t
 
b
e
f
o
r
e
 
c
o
d
i
n
g
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
T
i
m
e
 
C
o
m
p
l
e
x
i
t
y
 
&
 
B
i
g
-
O
"


 
 
 
 
 
 
l
e
v
e
l
=
{
1
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
1
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
A
s
k
e
d
 
i
n
 
e
v
e
r
y
 
i
n
t
e
r
v
i
e
w
 
t
o
 
c
l
a
s
s
i
f
y
 
c
a
n
d
i
d
a
t
e
 
c
o
d
e
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
A
l
g
o
r
i
t
h
m
 
T
r
a
c
e
r
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


