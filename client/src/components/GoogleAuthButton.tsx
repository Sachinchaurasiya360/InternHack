
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
G
o
o
g
l
e
L
o
g
i
n
 
}
 
f
r
o
m
 
"
@
r
e
a
c
t
-
o
a
u
t
h
/
g
o
o
g
l
e
"
;




t
y
p
e
 
P
r
o
p
s
 
=
 
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


 
 
o
n
A
c
c
e
s
s
T
o
k
e
n
:
 
(
a
c
c
e
s
s
T
o
k
e
n
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


 
 
o
n
E
r
r
o
r
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


 
 
d
i
s
a
b
l
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


}
;




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
G
o
o
g
l
e
A
u
t
h
B
u
t
t
o
n
(
{
 
l
a
b
e
l
,
 
o
n
A
c
c
e
s
s
T
o
k
e
n
,
 
o
n
E
r
r
o
r
,
 
d
i
s
a
b
l
e
d
 
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
 
l
o
g
i
n
 
=
 
u
s
e
G
o
o
g
l
e
L
o
g
i
n
(
{


 
 
 
 
o
n
S
u
c
c
e
s
s
:
 
(
r
e
s
p
)
 
=
>
 
o
n
A
c
c
e
s
s
T
o
k
e
n
(
r
e
s
p
.
a
c
c
e
s
s
_
t
o
k
e
n
)
,


 
 
 
 
o
n
E
r
r
o
r
,


 
 
 
 
f
l
o
w
:
 
"
i
m
p
l
i
c
i
t
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
(
)
 
=
>
 
l
o
g
i
n
(
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
d
i
s
a
b
l
e
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
w
-
f
u
l
l
 
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
 
g
a
p
-
2
.
5
 
p
x
-
6
 
p
y
-
3
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
b
o
l
d
 
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
2
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
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
"


 
 
 
 
>


 
 
 
 
 
 
<
G
o
o
g
l
e
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
h
-
4
 
w
-
4
"
 
/
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




f
u
n
c
t
i
o
n
 
G
o
o
g
l
e
I
c
o
n
(
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
 
}
:
 
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
s
v
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
}
 
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
 
2
4
 
2
4
"
 
x
m
l
n
s
=
"
h
t
t
p
:
/
/
w
w
w
.
w
3
.
o
r
g
/
2
0
0
0
/
s
v
g
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
2
2
.
5
6
 
1
2
.
2
5
c
0
-
.
7
8
-
.
0
7
-
1
.
5
3
-
.
2
-
2
.
2
5
H
1
2
v
4
.
2
6
h
5
.
9
2
c
-
.
2
6
 
1
.
3
7
-
1
.
0
4
 
2
.
5
3
-
2
.
2
1
 
3
.
3
1
v
2
.
7
7
h
3
.
5
7
c
2
.
0
8
-
1
.
9
2
 
3
.
2
8
-
4
.
7
4
 
3
.
2
8
-
8
.
0
9
z
"


 
 
 
 
 
 
 
 
f
i
l
l
=
"
#
4
2
8
5
F
4
"


 
 
 
 
 
 
/
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
1
2
 
2
3
c
2
.
9
7
 
0
 
5
.
4
6
-
.
9
8
 
7
.
2
8
-
2
.
6
6
l
-
3
.
5
7
-
2
.
7
7
c
-
.
9
8
.
6
6
-
2
.
2
3
 
1
.
0
6
-
3
.
7
1
 
1
.
0
6
-
2
.
8
6
 
0
-
5
.
2
9
-
1
.
9
3
-
6
.
1
6
-
4
.
5
3
H
2
.
1
8
v
2
.
8
4
C
3
.
9
9
 
2
0
.
5
3
 
7
.
7
 
2
3
 
1
2
 
2
3
z
"


 
 
 
 
 
 
 
 
f
i
l
l
=
"
#
3
4
A
8
5
3
"


 
 
 
 
 
 
/
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
5
.
8
4
 
1
4
.
0
9
c
-
.
2
2
-
.
6
6
-
.
3
5
-
1
.
3
6
-
.
3
5
-
2
.
0
9
s
.
1
3
-
1
.
4
3
.
3
5
-
2
.
0
9
V
7
.
0
7
H
2
.
1
8
C
1
.
4
3
 
8
.
5
5
 
1
 
1
0
.
2
2
 
1
 
1
2
s
.
4
3
 
3
.
4
5
 
1
.
1
8
 
4
.
9
3
l
3
.
6
6
-
2
.
8
4
z
"


 
 
 
 
 
 
 
 
f
i
l
l
=
"
#
F
B
B
C
0
5
"


 
 
 
 
 
 
/
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
1
2
 
5
.
3
8
c
1
.
6
2
 
0
 
3
.
0
6
.
5
6
 
4
.
2
1
 
1
.
6
4
l
3
.
1
5
-
3
.
1
5
C
1
7
.
4
5
 
2
.
0
9
 
1
4
.
9
7
 
1
 
1
2
 
1
 
7
.
7
 
1
 
3
.
9
9
 
3
.
4
7
 
2
.
1
8
 
7
.
0
7
l
3
.
6
6
 
2
.
8
4
c
.
8
7
-
2
.
6
 
3
.
3
-
4
.
5
3
 
6
.
1
6
-
4
.
5
3
z
"


 
 
 
 
 
 
 
 
f
i
l
l
=
"
#
E
A
4
3
3
5
"


 
 
 
 
 
 
/
>


 
 
 
 
<
/
s
v
g
>


 
 
)
;


}


